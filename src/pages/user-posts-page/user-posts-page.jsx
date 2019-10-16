import React from 'react';
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect';

import {postTypes} from '../../assets/data/data';

import CheckBoxInput from '../../components/input-checkbox.component/input-checkbox.component'
import SearchInput from '../../components/input-search.component/input-search.component'
import SingleChoice from '../../components/single-choice.component/single-choice.component';
import ViewedPostsHistory from '../../components/viewed-posts-history.component/viewed-posts-history.component';
import PostsDisplay from '../../components/posts-display.component/posts-display.component';

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
        const {userPosts} = this.props;
        const {searchField, selectedPostType, displayAsList} = this.state;
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

                <div className = "user-posts-page-display">
                    {filterPost.length>0? 
                        <PostsDisplay
                            posts={filterPost}
                            displayAsList={displayAsList}
                        />
                        :
                        null
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