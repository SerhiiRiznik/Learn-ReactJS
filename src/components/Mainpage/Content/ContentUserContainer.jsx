
import React from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import { setProfilePage } from '../../redux/userpage-reducer'
import ContentUser from './ContentUser'



class ContentUserContainer extends React.Component {

   componentDidMount() {

      let userId = this.props.match.params.userId
      if (!userId) {

         userId = 15738
      }

      this.props.setProfilePage(userId)

   }



   render() {

      if (!this.props.auth) return <Redirect to='/login' />
      return <ContentUser {...this.props} />
   }
}

let mapStateToProps = (state) => {
   return {
      auth: state.auth,
      userProfile: state.userPage.userProfile,

   }
}




let ContentUserWithRouting = withRouter(ContentUserContainer)

export default connect(mapStateToProps, { setProfilePage })(ContentUserWithRouting)