import React from 'react'
import { connect } from "react-redux"
import { logout } from '../redux/auth-reducer'
import Header from './Header'




const HeaderContainer = ({ mobileBurger, authUser, userPhoto, ...props }) => {

   return <Header {...props} authUser={authUser} userPhoto={userPhoto} isMobileBurger={mobileBurger} />
}

let mapStateToProps = (state) => {

   return {
      authUser: state.auth,
      userPhoto: state.app.userProfilePhoto,
      mobileBurger: state.mobileReducer.windowWidth
   }
}

export default connect(mapStateToProps, { logout })(HeaderContainer)