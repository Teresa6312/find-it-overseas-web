import React from 'react'
import logo from '../../logo.png'
import {Link} from 'react-router-dom'
import Modal from '../modal.component/modal.component'

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loginModalIsShow:false, 
        }
    }

    logInOnClick = () => {
        this.setState({loginModalIsShow:true});
        console.log("click");
    }

    render(){
        const {loginModalIsShow} = this.state;
        return (
            <header className="header">
                <Link to="/">
                    <img src={logo} className="header-logo__img" alt="logo" />
                </Link>
                {
                    this.props.isLoggedIn===false ? 
                    <Modal 
                        show={loginModalIsShow}
                        title="log in"
                        button="log in"
                        content="please log in"
                    />
                    :
                    null
                }
                {
                    this.props.isLoggedIn? 
                    <div className="header-main-menu__span">
                        <a href="#" className="header-main-menu-item">Posts</a>
                    </div>
                    :
                    <div className="header-main-menu__span">
                        <div 
                            className="header-main-menu-item" 
                            onClick={this.logInOnClick}
                            >
                            Log in / Sign Up
                        </div>
                    </div>
                }                
                <hr className="header__hr"/>
            </header>
        )
    }

}

export default Header