
import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'



let mapStateToProps = (state) => {
   return { authUser: state.auth }
}
export const withAutorized = (Component) => {

   class RedirectComponent extends React.Component {

      render() {
         if (this.props.authUser.authorized) {
            return <Component {...this.props} />
         } else {
            return <Redirect to='/login' />
         }

      }


   }
   return connect(mapStateToProps)(RedirectComponent)

}

