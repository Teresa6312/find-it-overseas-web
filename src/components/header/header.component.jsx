import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import SignInAndSignUp from '../sign-in-and-sign-up.component/sign-in-and-sign-up.componunt';
import {auth} from '../../firebase/firebase.utils'

import logo from '../../logo.png'
import Modal from '../modal.component/modal.component'
import OpenPostsIcon from '../open-posts-icon.component/open-posts-icon.component'

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loginModalIsShow:false, 
        }
    }

    showLogInModal = e => {
        this.setState({
            loginModalIsShow: !this.state.loginModalIsShow
        });
      };


    render(){
        const {loginModalIsShow} = this.state;
        const {currentUser} = this.props
        console.log("loginModalIsShow ->", this.state.loginModalIsShow)

        return (
            <header className="header">
                <Link to="/">
                    <img src={logo} className="header-logo__img" alt="logo" />
                </Link>
                {
                    currentUser? 
                    <div className="header-main-menu">
                        <Link className="header-main-menu-item" to='/posts/'>Posts</Link>
                        <div className="header-main-menu-item">
                            {currentUser.displayName}
                        </div>
                        <div className="header-main-menu-item" onClick = {() =>{
                                this.setState({
                                    loginModalIsShow: false
                                });
                                auth.signOut();
                            }}>
                            Sign out
                        </div>
                        <div className="header-main-menu-item">
                            <OpenPostsIcon number={5}/>
                        </div>
                        
                    </div>
                    :
                    <div className="header-main-menu">
                        <Modal 
                            onClose={this.showLogInModal}
                            show={loginModalIsShow}
                            title="FIND it OVERSEAS"
                            width="small"
                        >
                        <SignInAndSignUp/>
                        </Modal>                                                                                                                        
                        <div 
                            className="header-main-menu-item" 
                            onClick={e => {
                                this.showLogInModal(e);
                              }}
                            >
                            Log in / Sign Up
                        </div>
                    </div>
                }
                
            </header>
        )
    }

}

const mapStatToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStatToProps)(Header)