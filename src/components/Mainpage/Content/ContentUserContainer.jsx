
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { withAutorized } from '../../HOC/withAuthorized'
import { setProfilePage } from '../../redux/userpage-reducer'
import ContentUser from './ContentUser'



class ContentUserContainer extends React.Component {

   componentDidMount() {

      let userId = this.props.match.params.userId

      if (!userId) {

         userId = 15738
         // userId = this.props.authUser.userId
      }

      this.props.setProfilePage(userId)

   }



   render() {

      return <ContentUser {...this.props} />
   }
}

let mapStateToProps = (state) => {
   return {

      userProfile: state.userPage.userProfile,

   }
}

export default compose(

   connect(mapStateToProps, { setProfilePage }),
   withRouter,
   withAutorized,

)(ContentUserContainer)
