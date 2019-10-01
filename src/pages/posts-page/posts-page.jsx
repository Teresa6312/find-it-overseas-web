import React from 'react';
import CheckBoxInput from '../../components/input-checkbox.component/input-checkbox.component'
import SearchInput from '../../components/input-search.component/input-search.component'
import SingleChoice from '../../components/single-choice.component/single-choice.component';
import PostItem from '../../components/post-item.component/post-item.component';

class PostsPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            displayAsList : true,
            selectedPostType:"all",
            searchField: '',
            selectedTabs : ['red', 'car','chair'],
            pageNum: 1
        }
    }
    selectPostType = (e=>
        this.setState({
          selectedPostType: e.currentTarget.value
        }));

        
    render(){
        const PostBlockDisplayClassName = this.state.displayAsList? "post-block-display-list": "post-block-display-card";
        const itemContainerClassName = this.state.displayAsList? "post-block-display-list-container": "post-block-display-card-container";
        const posts = [
            {
                type:'post',
                title:"hello post",
                id:1
            },
            {
                type:'service',
                title:'hello service',
                id:2
            },
            {
                type:"product",
                title:"hello product",
                id:3
            },
            {
                type:"supplement",
                title:"hello supplement",
                id:4
            },
            {
                type:'post',
                title:"hello post",
                id:5
            },
            {
                type:'service',
                title:'hello service',
                id:6
            },
            {
                type:"product",
                title:"hello product",
                id:7
            },
            {
                type:"supplement",
                title:"hello supplement",
                id:8
            },
            {
                type:'post',
                title:"hello post",
                id:9
            },
            {
                type:'service',
                title:'hello service',
                id:10
            },
            {
                type:"product",
                title:"hello product",
                id:11
            },
            {
                type:"supplement",
                title:"hello supplement",
                id:12
            }
        ];
        const {searchField, selectedPostType} = this.state;
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
                    list={postTypes}
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
                            <PostItem 
                                key={post.id}
                                itemContainerClassName={`post-block-display-item-container ${itemContainerClassName}`}
                                post={post}
                                />
                        ))
                        :
                        <div className={`post-block-display-item-container ${itemContainerClassName}`}> no search result</div>
                    }
                </div>
            </div>
        );
    }
 
}

export default PostsPage;