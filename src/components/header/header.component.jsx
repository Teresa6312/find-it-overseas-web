import React from 'react'
import './header.style.scss';
import logo from '../../logo.png'


export const Header = (props) =>{
    return (
        <header className="header">
            <img src={logo} className="header-logo__img" alt="logo" />
            <MainMenu isLoggedIn = {props.isLoggedIn}/>
            <hr className="header__hr"/>
        </header>
    );
}
const MainMenu = (props) =>{
    const isLoggedIn = props.isLoggedIn
    if (isLoggedIn) {   
        return <LoggedInMenu/>
    }
    return (
        <span className="header-main-menu__span">
            <a href="#" className="header-main-menu__a">Log in / Sign Up</a>
        </span>
    );
}

const LoggedInMenu = () =>{
    return (
        <span className="header-main-menu__span">
            <a href="#" className="header-main-menu__a">Home</a>
            <a href="#" className="header-main-menu__a">Posts</a>
        </span>
        )

}