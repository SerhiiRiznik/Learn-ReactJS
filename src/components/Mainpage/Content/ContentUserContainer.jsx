
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { withAutorized } from '../../HOC/withAuthorized'
import { setProfilePage, updateStatus, setStatus, loadPhoto } from '../../redux/userpage-reducer'
import ContentUser from './ContentUser'



const ContentUserContainer = (props) => {
   useEffect(() => {
      let userId = props.match.params.userId
      if (!userId) {
         userId = props.authUser.userId
         if (!userId) {
            props.history.push('/login')
         }
      }
      props.setProfilePage(userId)
      props.setStatus(userId)
   }, [props.match.params.userId])

   return <ContentUser {...props}
      updateStatus={props.updateStatus}
      userStatus={props.userProfile}
      loadPhoto={props.loadPhoto}
      isOwner={!props.match.params.userId}
   />
}

let mapStateToProps = (state) => {
   return {
      userProfile: state.userPage.userProfile,
      status: state.userPage.userStatus,
   }
}
export default compose(
   connect(mapStateToProps, { setProfilePage, updateStatus, setStatus, loadPhoto }),
   withRouter,
   withAutorized,

)(ContentUserContainer)
