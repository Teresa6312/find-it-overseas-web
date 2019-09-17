import React from 'react'
import './home-page.style.scss'
import {Link} from 'react-router-dom'


class HomePage extends React.Component{
    
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div className="home-page-content">
                <div className="home-page-content-header">
                    Looking for somthing? 
                    <br/>
                    Let 
                    <span className="home-page-content-header__span"> FIND it OVERSEAS </span>
                    hlep you!
                </div>
                <div className="home-page-content-introduction"> If you heard about
                    <span className ="home-page-content-introduction-six-degrees__span"
                    title='Six degrees of separation is the idea that all people are six, or fewer, social connections away from each other.
                        As a result, a chain of "a friend of a friend" statements can be made to connect any two people in a maximum of six steps.'
                    > Six Degrees of Separation</span>
                    , you would know how we work.
                </div>
                <div className="home-page-content-main-menu">
                    <Link to="/posts">
                        <div className="home-page-content-main-menu-item">
                            view all request posts
                        </div>
                    </Link>
                    <Link to="/posts">
                    <div className="home-page-content-main-menu-item">
                        make a request post
                    </div>
                    </Link>
                </div>
            </div>
        )
    }

}

export default HomePage