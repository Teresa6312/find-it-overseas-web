import React from 'react';
import './post.style.scss';
import classNames from 'classnames'

export class Post extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            displayAsList : true,
            posts :['post','product', 'service', 'supplement'],
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
        const {searchField, posts} = this.state;
        const filterPost = posts.filter(post=>
                post.toLowerCase().includes(searchField.toLowerCase())
                )
        return(
            <div className='post-block'>            
                <input type="text" 
                            className="tab-block-text__input" 
                            placeholder="search posts" 
                            onChange={e=>{this.setState({searchField:e.target.value},()=>{
                                console.log(this.state.searchField);
                            })}}/>
                <div className="post-block-display-option">
                    <input type="checkbox" 
                        className="post-block-display-option-checkbox__input" 
                        checked={this.state.displayAsList}
                        onChange={e=>{this.setState({displayAsList:e.target.checked})}}/>
                    <span>display as list</span>
                </div>
                <div className = {PostBlockDisplayClassName}>
                    {filterPost.map((post, index)=>(
                        <div key={index} className={itemContainerClassName}>{post}</div>
                    ))}
                </div>
            </div>
        );
    }
 
}

