import { connect } from "react-redux"
import { setAuthUser } from '../redux/auth-reducer'
import React from 'react'
import Header from './Header'
import axios from "axios"



class HeaderContainer extends React.Component {

   componentDidMount() {
      axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
         withCredentials: true,
      })
         .then(response => {
            let { id, email, login } = response.data.data

            if (response.data.resultCode === 1) {
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