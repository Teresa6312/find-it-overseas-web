import React from 'react';
import './post.style.scss';
import classNames from 'classnames'
import {CheckBox} from '../checkbox.component/check-box.component'
import {SearchBox} from '../search-box.component/search-box.component'
import {SingleChoice } from '../single-choice.component/single-choice.component';

export class Post extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            displayAsList : true,
            posts :[
                {
                    type:'post',
                    title:"hello post"
                },
                {
                    type:'service',
                    title:'hello service'
                },
                {
                    type:"product",
                    title:"hello product"
                },
                {
                    type:"supplement",
                    title:"hello supplement"
                }],
            selectedPostType:"all",
            searchField: '',
            selectedTabs : ['red', 'car','chair']
        }
    }
    render(){
        const PostBlockDisplayClassName = classNames(
            'post-block-display', 
            this.state.displayAsList? "post-block-display-list": "post-block-display-card"
            );
        const itemContainerClassName = classNames('post-block-display-item-container', 
            this.state.displayAsList? "post-block-display-list-container": "post-block-display-card-container"
            );
        const {searchField, posts,selectedPostType} = this.state;
        const filterPost = posts.filter(post=>{
            if(selectedPostType==="all"){
                return post.title.toLowerCase().includes(searchField.toLowerCase()) 
            }else{
                if(post.type===selectedPostType){
                   return post.title.toLowerCase().includes(searchField.toLowerCase())
                }else{
                    return false
                }       
            }       
            })
        const   postTypes = ['all','product', 'service', 'supplement']
        const   selectPostType = (e=>
                    this.setState({
                      selectedPostType: e.currentTarget.value
                    }));
        return(
            <div className='post-block'> 
                <SearchBox
                    name="post-block-search"
                    className="tab-block-search__input"
                    placeholder="search posts" 
                    handleChange={e=>{this.setState({searchField:e.target.value},()=>{
                        console.log("----------");
                    })}}/>
                <SingleChoice
                    name="post-type"
                    list={postTypes}
                    selectedOption = {this.state.selectedPostType}
                    handleChange = {selectPostType}
                />
                <CheckBox 
                    name="post-block-display-option"
                    addClassName = "post-block-display-option"
                    isChecked={this.state.displayAsList}
                    handleChange={e=>{this.setState({displayAsList:e.target.checked})}}
                    labelText="display as list"
                    />
                <div className = {PostBlockDisplayClassName}>
                    {filterPost.map((post, index)=>(
                        <div key={index} className={itemContainerClassName}>{post.title}</div>
                    ))}
                </div>
            </div>
        );
    }
 
}

