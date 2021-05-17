
import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

let mapStateToProps = (state) => {
   return { authUser: state.auth }
}
export const withAutorized = (Component) => {

   const RedirectComponent = (props) => {
      if (props.authUser.authorized) {
         return <Component {...props} />
      } else {
         return <Redirect to='/login' />
      }
   }
   return connect(mapStateToProps)(RedirectComponent)
}

