import { connect } from "react-redux"
import { setAuthUser } from '../redux/auth-reducer'
import React from 'react'
import Header from './Header'
import { userAPI } from "../../API/api"



class HeaderContainer extends React.Component {

   componentDidMount() {

      userAPI.getUserAuth()
         .then(response => {
            let { id, email, login } = response.data
            if (response.resultCode === 1) {
               this.props.setAuthUser(false)
            } else {
               this.props.setAuthUser(true, id, email, login)
            }
         })
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

export default connect(mapStateToProps, { setAuthUser })(HeaderContainer)