import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {auth} from '../../firebase/firebase.utils'

import { closeLogInModal } from "../../redux/log-in-modal/log-in-modal.action";


const UserMenuDropdrown = ({closeLogInModal}) =>{
    return(
        <div className="user-menu-dropdown">
            <div className="user-menu-dropdown-item" >
                <Link to="/user-profile" className="user-menu-dropdown-item-link"> profile</Link>
            </div>                            
            <div className="user-menu-dropdown-item" >
                <Link to="/post-history" className="user-menu-dropdown-item-link"> post history</Link>
            </div>
            <div className="user-menu-dropdown-item" onClick = {() =>{
                closeLogInModal();
                auth.signOut();
                }}>
                Sign out
            </div>                            
        </div>
    )
}



const mapDispatchToProps = dispatch =>({
    closeLogInModal: () => dispatch(closeLogInModal())
  })

// const mapStateToProps = state =>({
//     currentUser: state.user.currentUser
// });

export default connect(null, mapDispatchToProps)(UserMenuDropdrown);