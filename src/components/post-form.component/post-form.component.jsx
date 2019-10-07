import React from 'react';
import {MdClose} from 'react-icons/md';

import {postTypes} from '../../assets/data/data';

import TextInput from '../input-text.component/input-text.component';
import SearchInput from '../input-search.component/input-search.component';
import TextareaInput from '../input-textarea.component/input-textarea.component';
import SingleChoice from '../single-choice.component/single-choice.component';
import FormButton from '../form-button.component/form-button.component';
import MessageBar from '../message-bar.component/message-bar.component';
import { timeout } from 'q';

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
        const {tabs, postType} = this.state;
        if(postType===''){
            this.setState({message:{type:"warning", messageText:"Please select Your request Type."}})
            return 
        }
        if(tabs.length<3){
            this.setState({message:{type:"warning", messageText:"Minimum 3 tbas."}})
            return 
        }
        return;
    }

    render(){
        const {tabs, title, postType, message}= this.state;
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
                        name="discription"
                        handleChange={this.textInputHandleChange}
                        required/>
                    <FormButton 
                        type={postType!==''&&tabs.length>=3?'submit':'button'} 
                        onClick={this.verifyForm}>
                        submit
                    </FormButton>
                </form>        
            
            </div>
        )
    }
}

export default PostForm;