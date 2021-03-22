
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { withAutorized } from '../../HOC/withAuthorized'
import { setProfilePage, updateStatus, setStatus } from '../../redux/userpage-reducer'
import ContentUser from './ContentUser'



class ContentUserContainer extends React.Component {

   componentDidMount() {

      let userId = this.props.match.params.userId

      if (!userId) {

         userId = 15738
         // userId = this.props.authUser.userId
      }

      this.props.setProfilePage(userId)
      this.props.setStatus(userId)

   }



   render() {
      return <ContentUser {...this.props}
         updateStatus={this.props.updateStatus}
         userStatus={this.props.userProfile} />
   }
}

let mapStateToProps = (state) => {

   return {

      userProfile: state.userPage.userProfile,
      status: state.userPage.userStatus
   }
}

export default compose(

   connect(mapStateToProps, { setProfilePage, updateStatus, setStatus }),
   withRouter,
   withAutorized,

)(ContentUserContainer)
