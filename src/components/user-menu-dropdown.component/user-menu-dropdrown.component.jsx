import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import links from './links';

import {auth} from '../../firebase/firebase.utils'
import { closeLogInModal } from "../../redux/log-in-modal/log-in-modal.action";


const UserMenuDropdrown = ({closeLogInModal}) =>{
    return(
        <div className="user-menu-dropdown">
            {links.map(link=>(
                <Link key={link.id} className="user-menu-dropdown-item user-menu-dropdown-item-link" to={link.url}>
                    {link.title}
                </Link>
            ))}

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