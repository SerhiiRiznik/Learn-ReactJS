import { Route, Switch } from "react-router-dom";
import React, { Suspense, useEffect } from 'react'
import Loader from '../common/Loader/Loader';
import Info from "./Info/Info";
import ContentMusic from "./Music/ContentMusic";
import ContentNews from "./News/ContentNews";
import Navbar from "./Navbar/Navbar";
import UserInfo from "./Content/UserInfo/UserInfo";
import Login from "../Login/login";
import ContainerContentDialogs from "./Dialogs/ContainerContentDialogs";
import { connect } from "react-redux";
import { compose } from 'redux';
import { initializeApp } from '../redux/app-reducer'
import Settings from "../Settings/Settings";
import { setProfilePage } from "../redux/userpage-reducer";



const UsersContainer = React.lazy(() => import('./Users/UsersContainer'));
const ContentUserContainer = React.lazy(() => import('./Content/ContentUserContainer'));


const MainpageContainer = ({ initializeApp, initialized }) => {

   useEffect(() => {
      initializeApp()
   }, [])


   if (!initialized) {
      return <Loader />
   }
   return (
      <div className='mainpage container'>
         <div className='row'>
            <div className='mainpage__wrapper '>
               <Navbar />
               <div className='wrapper-content col-9'>
                  <Switch>
                     <Route path='/about' component={UserInfo} />

                     <Route path='/dialogs' component={ContainerContentDialogs} />
                     <Route path='/news' component={ContentNews} />
                     <Route path='/music' component={ContentMusic} />
                     <Route path='/settings' component={Settings} />
                     <Route exact path='/' component={Info} />

                     <Route path='/login' component={Login} />

                     <Suspense fallback={<div>Loading...</div>}>
                        <Route path='/profile/:userId?' component={ContentUserContainer} />
                        <Route path='/users' component={UsersContainer} />
                     </Suspense>
                  </Switch>
               </div>
            </div>
         </div>
      </div>
   )
}
const mapStateToProps = (state) => ({
   initialized: state.app.initialized,
   profile: state.userPage.userProfile,
})

export default compose(
   connect(mapStateToProps, { initializeApp, setProfilePage }))(MainpageContainer)

