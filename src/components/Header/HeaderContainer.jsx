import React from 'react'
import { connect } from "react-redux"
import { Logout } from '../redux/auth-reducer'
import Header from './Header'



const HeaderContainer = (props) => {
   // console.log(props, `HeaderContainer Render`);
   return <Header {...props} />
}

let mapStateToProps = (state) => {
   return {
      authUser: state.auth
   }
}

export default connect(mapStateToProps, { Logout })(HeaderContainer)