import React from 'react';

import {firestore} from '../../firebase/firebase.utils';
import {postTypes} from '../../assets/data/data';

import CheckBoxInput from '../../components/input-checkbox.component/input-checkbox.component'
import SearchInput from '../../components/input-search.component/input-search.component'
import SingleChoice from '../../components/single-choice.component/single-choice.component';
import PostsDisplay from '../../components/posts-display.component/posts-display.component';
import ViewedPostsHistory from '../../components/viewed-posts-history.component/viewed-posts-history.component';

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
        const PostBlockDisplayClassName = this.state.displayAsList? "posts-page-display-list": "posts-page-display-card";
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
            <div className='posts-page'> 
                <SearchInput
                    name="posts-page-search"
                    placeholder="search posts" 
                    handleChange={e=>{this.setState({searchField:e.target.value},()=>{
                        console.log("----------");
                    })}}/>
                <SingleChoice
                    name="posts-page-post-types"
                    list={postTypeChoices}
                    selectedOption = {this.state.selectedPostType}
                    handleChange = {this.selectPostType}
                />
                <CheckBoxInput 
                    name="posts-page-display-option"
                    isChecked={this.state.displayAsList}
                    handleChange={e=>{this.setState({displayAsList:e.target.checked})}}
                    labelText="display as list"
                    />
                    <div className = {`posts-page-display`}>
                    {filterPost.length>0? 
                        <PostsDisplay
                            posts={filterPost}
                            addClassName={PostBlockDisplayClassName}
                        />
                        :
                        <div className={`${PostBlockDisplayClassName}-item`}> no post found</div>
                    }
                </div>
                <ViewedPostsHistory/>
            </div>
        );
    }
}

export default PostsPage;