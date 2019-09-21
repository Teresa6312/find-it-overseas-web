import React from 'react'
import {Link} from 'react-router-dom'

import logo from '../../logo.png'
import Modal from '../modal.component/modal.component'
import SignInAndSignUp from '../sign-in-and-sign-up.component/sign-in-and-sign-up.componunt';
import {auth} from '../../firebase/firebase.utils'

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
                    currentUser ? 
                    null
                    :
                    <Modal 
                        onClose={this.showLogInModal}
                        show={loginModalIsShow}
                        title="FIND it OVERSEAS"
                        width="small"
                    >
                    <SignInAndSignUp/>
                    </Modal>
                }
                {
                    this.props.currentUser? 
                    <div className="header-main-menu">
                        <Link className="header-main-menu-item" to='/posts/'>Posts</Link>
                        <div className="header-main-menu-item">
                            {this.props.currentUser.displayName}
                        </div>
                        <div className="header-main-menu-item" onClick = {() =>{
                                this.setState({
                                    loginModalIsShow: false
                                });
                                auth.signOut();
                            }}>
                            Sign out
                        </div>
                    </div>
                    :
                    <div className="header-main-menu">
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
                <hr className="header__hr"/>
            </header>
        )
    }

}

export default Header