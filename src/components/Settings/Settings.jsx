import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { compose } from 'redux'
import { withAutorized } from '../HOC/withAuthorized'
import AccountSettings from './AccountSettings';
import { initializeApp } from '../redux/app-reducer'
import Loader from '../common/Loader/Loader';
import { settingProfile, setProfilePage } from '../redux/settings-reducer'
// import { setProfilePage } from '../redux/userpage-reducer'
import { withRouter } from 'react-router-dom'



const Settings = ({ initialized, settingProfile, setProfilePage, profile, ...props }) => {

   useEffect(() => {

      setProfilePage(props.authUser.userId)
   }, [props.authUser])

   if (!initialized || !profile) {
      return <Loader />
   }
   return (
      <>
         <h1>Settings</h1>
         <AccountSettings profile={profile} settingProfile={settingProfile} />

      </>
   )

}
const mapStateToProps = (state) => ({
   initialized: state.app.initialized,
   profile: state.settings.userProfile,
})

export default compose(
   withRouter,
   connect(mapStateToProps, { initializeApp, settingProfile, setProfilePage }),
   withAutorized
)(Settings)
