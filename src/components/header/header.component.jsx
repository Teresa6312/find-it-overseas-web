import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import SignInAndSignUp from '../sign-in-and-sign-up.component/sign-in-and-sign-up.componunt';

import logo from '../../logo.png'
import links from './links';

import Modal from '../modal.component/modal.component'
import OpenPostsIcon from '../open-posts-icon.component/open-posts-icon.component'
import UserMenuDropdrown from '../user-menu-dropdown.component/user-menu-dropdrown.component';

import {showLogInModal, closeLogInModal} from '../../redux/log-in-modal/log-in-modal.action'; 
import MessageBar from '../message-bar.component/message-bar.component';
import { clearMessage } from '../../redux/message/message.action';

// import { getUserOpeningPostsNumber } from '../../redux/user/user.action';

class Header extends React.Component{

    render(){
        const { message, clearMessage ,currentUser, logInModalIsShow,  showLogInModal,  closeLogInModal} = this.props;
        if(message){
            setTimeout(()=>clearMessage(), 2000);
        }
        return (
            <div className="header">
                {
                    message?
                    <MessageBar
                        type={message.type}>
                        {message.messageText}
                    </MessageBar>
                    :null
                }
                <Link to="/">
                    <img src={logo} className="header-logo__img" alt="logo" />
                </Link>
                {
                    currentUser? 
                    <div className="header-main-menu">
                        {links.map(link=>(
                            <Link key={link.id} className="header-main-menu-item" to={link.url}>{link.title}</Link>
                        ))}
                        <div className="header-main-menu-item user-menu">
                            {currentUser.displayName ? currentUser.displayName:"name"}
                            <UserMenuDropdrown/>
                        </div>

                        <OpenPostsIcon/>
                        
                    </div>
                    :
                    <div className="header-main-menu">
                        {links.map(link=>(
                            <Link key={link.id} className="header-main-menu-item" to={link.url}>{link.title}</Link>
                        ))}
                        <Modal 
                            onClose={closeLogInModal}
                            show={logInModalIsShow}
                            title="FIND it OVERSEAS"
                            width="small"
                        >
                        <SignInAndSignUp/>
                        </Modal>                                                                                                                        
                        <div 
                            className="header-main-menu-item" 
                            onClick={showLogInModal}
                            >
                            Log in / Sign Up
                        </div>
                    </div>
                }
                
            </div>
            
    )}
    
}

const mapDispatchToProps = dispatch =>({
    closeLogInModal: () => dispatch(closeLogInModal()),
    showLogInModal: () => dispatch(showLogInModal()),
    clearMessage:() => dispatch(clearMessage()),
  })

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    logInModalIsShow: state.logInModal.logInModalIsShow,
    message:state.message.message,
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)