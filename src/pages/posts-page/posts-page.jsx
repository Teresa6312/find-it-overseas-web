import React from 'react';

import {firestore} from '../../firebase/firebase.utils';
import {postTypes} from '../../assets/data/data';

import CheckBoxInput from '../../components/input-checkbox.component/input-checkbox.component'
import SearchInput from '../../components/input-search.component/input-search.component'
import SingleChoice from '../../components/single-choice.component/single-choice.component';
import PostsDisplayItem from '../../components/posts-display-item.component/posts-diaplay-item.component';
import ViewHistory from '../../components/view-history.component/view-history.component';

class PostsPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            displayAsList : true,
            selectedPostType:"all",
            searchField: '',
            selectedTabs : ['red', 'car','chair'],
            pageNum: 1,
            posts:[]
        }
    }
    
    componentDidMount(){
        firestore.collection("posts")
        .where('open', '==', true)
        .get().then(snapshot=>{
            snapshot.forEach(post =>{
                this.setState(prevState=>{
                    return {posts:[...prevState.posts,{id:post.id, ...post.data()}]}
                })
            });
        });
    }
    selectPostType = (e=>
        this.setState({
          selectedPostType: e.currentTarget.value
        }));

        
    render(){
        const PostBlockDisplayClassName = this.state.displayAsList? "post-block-display-list": "post-block-display-card";
        const itemContainerClassName = this.state.displayAsList? "post-block-display-list-container": "post-block-display-card-container";

        const {posts, searchField, selectedPostType} = this.state;
        const filterPost = posts.filter(post=>{
            if(selectedPostType==="all"){
                return post.title.toLowerCase().includes(searchField.toLowerCase()) 
            }else{
                if(postTypes[post.type]===selectedPostType){
                   return post.title.toLowerCase().includes(searchField.toLowerCase())
                }else{
                    return false
                }       
            }       
            })
        let  postTypeChoices = ['all']
        for (let key in postTypes) {
            postTypeChoices.push(postTypes[key]);
        }
        return(
            <div className='post-block'> 
                <SearchInput
                    name="post-block-search"
                    className="post-block-search__input"
                    placeholder="search posts" 
                    handleChange={e=>{this.setState({searchField:e.target.value},()=>{
                        console.log("----------");
                    })}}/>
                <SingleChoice
                    name="post-block-post-types"
                    classNames="post-block-post-types"
                    list={postTypeChoices}
                    selectedOption = {this.state.selectedPostType}
                    handleChange = {this.selectPostType}
                />
                <CheckBoxInput 
                    id="post-block-display-option"
                    name="post-block-display-option"
                    addClassName = "post-block-display-option"
                    isChecked={this.state.displayAsList}
                    handleChange={e=>{this.setState({displayAsList:e.target.checked})}}
                    labelText="display as list"
                    />
                <div className = {`post-block-display ${PostBlockDisplayClassName}`}>
                    {filterPost.length>0? 
                        filterPost.map((post)=>(
                            <PostsDisplayItem 
                                key={post.id}
                                itemContainerClassName={`post-block-display-item-container ${itemContainerClassName}`}
                                post={post}
                                />
                        ))
                        :
                        <div className={`post-block-display-item-container ${itemContainerClassName}`}> no search result</div>
                    }
                </div>
                <ViewHistory/>
            </div>
        );
    }
}

export default PostsPage;