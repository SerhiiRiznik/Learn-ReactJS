import { connect } from "react-redux"
import { setAuthorized } from '../redux/auth-reducer'
import React from 'react'
import Header from './Header'



class HeaderContainer extends React.Component {

   componentDidMount() {
      this.props.setAuthorized()

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

export default connect(mapStateToProps, { setAuthorized })(HeaderContainer)