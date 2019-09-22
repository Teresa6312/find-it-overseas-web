import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import SignInAndSignUp from '../sign-in-and-sign-up.component/sign-in-and-sign-up.componunt';

import logo from '../../logo.png'
import Modal from '../modal.component/modal.component'
import OpenPostsIcon from '../open-posts-icon.component/open-posts-icon.component'
import UserMenuDropdrown from '../user-menu-dropdown.component/user-menu-dropdrown.component';

import {showLogInModal, closeLogInModal} from '../../redux/log-in-modal/log-in-modal.action'; 

const Header =({currentUser,logInModalIsShow, showLogInModal, closeLogInModal}) =>{
    return (
        <header className="header">
            <Link to="/">
                <img src={logo} className="header-logo__img" alt="logo" />
            </Link>
            {
                currentUser? 
                <div className="header-main-menu">
                    <Link className="header-main-menu-item" to='/posts/'>Posts</Link>
                    <div className="header-main-menu-item user-menu">
                        {currentUser.displayName!=="" ? currentUser.displayName:"name"}
                        <UserMenuDropdrown/>
                    </div>

                    <div className="header-main-menu-item">
                        <OpenPostsIcon number={5}/>
                    </div>
                    
                </div>
                :
                <div className="header-main-menu">
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
            
        </header>
    )


}

const mapDispatchToProps = dispatch =>({
    closeLogInModal: () => dispatch(closeLogInModal()),
    showLogInModal: () => dispatch(showLogInModal())
  })

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    logInModalIsShow: state.logInModal.logInModalIsShow,
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)