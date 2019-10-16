import React from 'react';
import {MdClose} from 'react-icons/md';
import { createStructuredSelector } from 'reselect';
import {connect} from 'react-redux';

import {postTypes} from '../../assets/data/data';
import {selectCurrentUser} from '../../redux/user/user.selectors';

import TextInput from '../input-text.component/input-text.component';
import SearchInput from '../input-search.component/input-search.component';
import TextareaInput from '../input-textarea.component/input-textarea.component';
import SingleChoice from '../single-choice.component/single-choice.component';
import FormButton from '../form-button.component/form-button.component';
import MessageBar from '../message-bar.component/message-bar.component';
import { firestore } from '../../firebase/firebase.utils';

class PostForm extends React.Component{
    constructor(){
        super();
        this.state={
            message:null,
            tabs:[],
            title:'',
            description:'',
            postType:'',          
        }
    };

    searchHandleChange = e =>{
        if (e.keyCode === 13) {
            const {value} = e.target;
            e.preventDefault();
            const {tabs} = this.state;
            if(tabs.indexOf(value)<0){
                this.setState(prevState=>{return{tabs:[...prevState.tabs, value]}})
            }else{
                this.setState({message:{type:"warning", messageText:"Tab already added!"}})
            }
            e.target.value='';
        }
    };

    deleteTab = (e, deleteTab) =>{
        this.setState(prevState=>{return{tabs:prevState.tabs.filter(tab=>tab!==deleteTab)}})
    }

    textInputHandleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
      };

    verifyForm=()=>{
        const {tabs, title, postType, description}= this.state;
        console.log(description)
        if(postType===''){
            this.setState({message:{type:"warning", messageText:"Request Type is required!"}})
            return 
        }
        else if(tabs.length<3){
            this.setState({message:{type:"warning", messageText:"Minimum 3 tbas."}})
            return 
        }else{
            const values = {title, description}
            for(const key in values){
                if(values[key]===''){
                    this.setState({message:{type:"warning", messageText: key+" is required!"}})
                    return              
                }
            }

            this.setState({message:null})
            this.submitForm();
            return true;
        }
    }
    onClose = () => {
        this.props.onClose();
      };

    submitForm = () =>{
        if(this.verifyForm){
            const {tabs, title, postType, description}= this.state;
            const {currentUser} = this.props;
            const createdBy = firestore.collection("users").doc(currentUser.id)
            const createdAt = new Date();
            console.log(createdBy, createdAt, tabs, title, postType, description)
            firestore.collection("posts").add({
                open: true,
                createdBy,
                createdAt,
                tabs,
                title,
                postType,
                description,
            })
            this.onClose();
        }
    }

    render(){
        const {tabs, title, postType, description, message}= this.state;
        return(
            <div className="post-form">
                {
                    message?
                    <MessageBar
                        type={message.type}>
                        {message.messageText}
                    </MessageBar>
                    :null
                }
                <form className="post-form__form">
                    <SingleChoice
                        name="postType"
                        labelText="select your request type"
                        value={postType}
                        handleChange={this.textInputHandleChange}
                        list={Object.entries(postTypes)}
                        required/>
                    <SearchInput
                        labelText="tabs (minimum 3)"
                        name="tabCreater"
                        onKeyDown={this.searchHandleChange}
                        />
                    <div className="post-form-tabs">
                        {
                            tabs.map((tab, index)=>(
                                <div 
                                    className="post-form-tabs-item"
                                    key={index}
                                    >
                                    <span 
                                        className="post-form-tabs-item-delete"
                                        onClick={e=>this.deleteTab(e,tab)}
                                        >
                                        <MdClose/>
                                    </span>
                                    {tab}
                                </div>
                            ))
                        }
                    </div>
                    
                    <TextInput
                        name='title'
                        value={title}
                        handleChange={this.textInputHandleChange}
                        required
                    />
         
                    <TextareaInput
                        name="description"
                        value={description}
                        handleChange={this.textInputHandleChange}
                        required/>
                    <FormButton 
                        type="button"
                        onClick={this.verifyForm}>
                        submit
                    </FormButton>
                </form>        
            
            </div>
        )
    }
}


const mapStateToProps=createStructuredSelector({
    currentUser:selectCurrentUser
})

export default connect(mapStateToProps)(PostForm);