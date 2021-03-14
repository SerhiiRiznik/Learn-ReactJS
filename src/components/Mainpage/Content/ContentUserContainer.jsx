
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { userAPI } from '../../../API/api'
import { setUserProfile } from '../../redux/userpage-reducer'
import ContentUser from './ContentUser'



class ContentUserContainer extends React.Component {

   componentDidMount() {
      let userId = this.props.match.params.userId
      if (!userId) {
         userId = this.props.auth.userId
      }
      userAPI.getUser(userId).then(response => {
         this.props.setUserProfile(response)
      })
   }


   render() {
      return <ContentUser {...this.props} />
   }
}

let mapStateToProps = (state) => {
   return {
      userProfile: state.userPage.userProfile,
      auth: state.auth
   }
}
let ContentUserWithRouting = withRouter(ContentUserContainer)

export default connect(mapStateToProps, { setUserProfile })(ContentUserWithRouting)