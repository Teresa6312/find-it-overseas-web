import React from 'react';
import {connect} from 'react-redux'

import {postTypes} from '../../assets/data/data';

import CheckBoxInput from '../../components/input-checkbox.component/input-checkbox.component'
import SearchInput from '../../components/input-search.component/input-search.component'
import SingleChoice from '../../components/single-choice.component/single-choice.component';
import ViewedPostsHistory from '../../components/viewed-posts-history.component/viewed-posts-history.component';
import PostsDisplay from '../../components/posts-display.component/posts-display.component';
import { createStructuredSelector } from 'reselect';
import { selectUserPosts, selectCurrentUser } from '../../redux/user/user.selectors';
import { showLogInModal } from '../../redux/modal/modal.action';

class UserPostsPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            displayAsList : true,
            selectedPostType:"all",
            searchField: '',
            selectedTabs : ['red', 'car','chair'],
            pageNum: 1,
        }
    }
    
    componentDidMount(){
        const {currentUser, showLogInModal} = this.props;
        if(!currentUser){
            showLogInModal()
        }
    }

    selectPostType = (e=>
        this.setState({
          selectedPostType: e.currentTarget.value
        }));

        
    render(){
        const PostBlockDisplayClassName = this.state.displayAsList? "user-posts-page-display-list": "user-posts-page-display-card";
        const {userPosts} = this.props;
        const {searchField, selectedPostType} = this.state;
        const filterPost = userPosts.filter(post=>{
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
            <div className='user-posts-page'> 
                <div className="user-posts-page-header">
                    Request Post History
                </div>

                <SearchInput
                    name="user-posts-page-search"
                    placeholder="search posts" 
                    handleChange={e=>{this.setState({searchField:e.target.value},()=>{
                        console.log("----------");
                    })}}/>
                <SingleChoice
                    name="user-posts-page-post-types"
                    list={postTypeChoices}
                    selectedOption = {this.state.selectedPostType}
                    handleChange = {this.selectPostType}
                />
                <CheckBoxInput 
                    name="user-posts-page-display-option"
                    isChecked={this.state.displayAsList}
                    handleChange={e=>{this.setState({displayAsList:e.target.checked})}}
                    labelText="display as list"
                    />
                <div className = {`user-posts-page-display`}>
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

const mapDispatchToProps = dispatch =>({
    showLogInModal: () =>dispatch(showLogInModal())
})
  

const mapStateToProps = createStructuredSelector({
    userPosts: selectUserPosts,
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps,mapDispatchToProps)(UserPostsPage);