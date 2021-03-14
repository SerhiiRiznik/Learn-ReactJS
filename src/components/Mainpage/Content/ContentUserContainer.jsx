import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setUserProfile } from '../../redux/userpage-reducer'
import ContentUser from './ContentUser'



class ContentUserContainer extends React.Component {

   componentDidMount() {
      let userId = this.props.match.params.userId
      if (!userId) {
         userId = this.props.auth.userId
      }
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
         .then(response => {

            this.props.setUserProfile(response.data)

         })
   }


   render() {

      return (
         <>
            <ContentUser {...this.props} />
         </>
      )
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