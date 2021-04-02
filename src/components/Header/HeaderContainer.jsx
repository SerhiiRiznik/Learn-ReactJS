import { connect } from "react-redux"
import { setAuthorized, Logout } from '../redux/auth-reducer'
import React from 'react'
import Header from './Header'



class HeaderContainer extends React.Component {

   componentDidMount() {


   }

   render() {

      return <>
         <Header {...this.props} />
      </>
   }

}

let mapStateToProps = (state) => {
   return {
      authUser: state.auth
   }
}

export default connect(mapStateToProps, { Logout })(HeaderContainer)