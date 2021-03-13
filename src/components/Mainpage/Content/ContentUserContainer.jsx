import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { setUserProfile } from '../../redux/userpage-reducer'
import ContentUser from './ContentUser'



class ContentUserContainer extends React.Component {

   componentDidMount() {

      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/5`)
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
      userProfile: state.userPage.userProfile
   }
}

export default connect(mapStateToProps, { setUserProfile })(ContentUserContainer)