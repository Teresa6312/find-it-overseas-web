import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {firestore} from '../../firebase/firebase.utils';
import {postTypes} from '../../assets/data/data';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {showLogInModal} from '../../redux/modal/modal.action';

import CheckBoxInput from '../../components/input-checkbox.component/input-checkbox.component'
import SearchInput from '../../components/input-search.component/input-search.component'
import SingleChoice from '../../components/single-choice.component/single-choice.component';
import PostsDisplay from '../../components/posts-display.component/posts-display.component';
import ViewedPostsHistory from '../../components/viewed-posts-history.component/viewed-posts-history.component';
import FormButton from '../../components/form-button.component/form-button.component';
import PostForm from '../../components/post-form.component/post-form.component';
import Modal from '../../components/modal.component/modal.component';

class PostsPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            displayAsList : true,
            selectedPostType:"0",
            searchField: '',
            pageNum: 1,
            posts:[],
            newPost:false
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
    selectPostType = e =>
        this.setState({
          selectedPostType: e.currentTarget.value
        });

    searchHandleChange = e =>{
        if (e.keyCode === 13) {
            e.preventDefault();
            this.setState({searchField:e.target.value})
        }
    };
    newPostModal = () => {
        this.setState({
            newPost: !this.state.newPost
        });
    };

    postTypeChoices = Object.entries({0:"all",...postTypes})

    render(){
        const PostBlockDisplayClassName = this.state.displayAsList? "posts-page-display-list": "posts-page-display-card";
        const {posts, newPost, searchField, selectedPostType} = this.state;
        const {currentUser, showLogInModal} = this.props;
        const filterPost = posts.filter(post=>{
            if(selectedPostType==="0"){
                return post.title.toLowerCase().includes(searchField.toLowerCase()) 
            }else{
                console.log(post.type)
                if(post.type===parseInt(selectedPostType)){
                   return post.title.toLowerCase().includes(searchField.toLowerCase())
                }else{
                    return false
                }       
            }       
            })
        return(
            <div className='posts-page'> 
                <SearchInput
                    name="posts-page-search"
                    placeholder="search posts" 
                    onKeyDown={this.searchHandleChange}/>
                <SingleChoice
                    name="posts-page-post-types"
                    list={this.postTypeChoices}
                    value = {this.state.selectedPostType}
                    handleChange = {this.selectPostType}
                />
                <FormButton
                    onClick={currentUser?this.newPostModal:showLogInModal}
                    >
                    new request post
                </FormButton>
                {
                    currentUser?
                    <Modal
                        onClose={this.newPostModal}
                        show={newPost}
                        width="small"
                        >
                        <PostForm/>
                    </Modal>
                    :null
                
                }

                <CheckBoxInput 
                    name="posts-page-display-option"
                    isChecked={this.state.displayAsList}
                    handleChange={e=>{this.setState({displayAsList:e.target.checked})}}
                    labelText="display as list"
                    />

                <div className = "posts-page-display">
                    {filterPost? 
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

const mapStateToProps=createStructuredSelector({
    currentUser:selectCurrentUser
})

const mapDispatchToProps = dispatch=>({
    showLogInModal:()=>dispatch(showLogInModal()),
})

export default connect(mapStateToProps,mapDispatchToProps)(PostsPage);