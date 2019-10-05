import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { showLogInModal } from '../../redux/modal/modal.action';

const UserProfilePage =({currentUser, showLogInModal})=>{
    if(!currentUser){
        showLogInModal()
        return null;
    }
    return(
        <div className="user-profile-page">
            <div className="user-profile-page-header">
                Profile
            </div>
            <div>
                {currentUser.email}
            </div>
        </div>
    )
}


const mapDispatchToProps = dispatch =>({
    showLogInModal: () => dispatch(showLogInModal()),
  })
  
  const mapStateToProps = createStructuredSelector ({
    currentUser:selectCurrentUser 
  })
  
  export default connect(mapStateToProps,mapDispatchToProps)(UserProfilePage);