import React from 'react'
import './header.style.scss';
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

    render(){
        const {loginModalIsShow} = this.state;
        return (
            <header className="header">
                <Link to="/">
                    <img src={logo} className="header-logo__img" alt="logo" />
                </Link>
                {this.props.isLoggedIn===false? <Modal show={loginModalIsShow}/>: null}
                {
                    this.props.isLoggedIn? 
                    <span className="header-main-menu__span">
                        <a href="#" className="header-main-menu-item">Posts</a>
                    </span>
                    :
                    <span className="header-main-menu__span">
                        <span 
                            className="header-main-menu-item" 
                            onClick={() =>{this.setState({loginModelIsShow:true}, ()=>{
                                console.log(this.state.loginModelIsShow);
                                
                            })}}
                            >
                            Log in / Sign Up
                        </span>
                    </span>
                }                
                <hr className="header__hr"/>
            </header>
        )
    }

}

export default Header