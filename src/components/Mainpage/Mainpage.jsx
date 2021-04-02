import { Route, withRouter } from "react-router-dom";
import React from 'react'
import ContentMusic from "./Music/ContentMusic";
import ContentNews from "./News/ContentNews";
import Setting from "./Setting/Setting";
import Navbar from "./Navbar/Navbar";
import UserInfo from "./Content/UserInfo/UserInfo";
import UsersContainer from "./Users/UsersContainer";
import ContentUserContainer from "./Content/ContentUserContainer";
import ContainerContentDialogs from "./Dialogs/ContainerContentDialogs";
import Login from "../Login/login";

import { connect } from "react-redux";
import { compose } from 'redux';
import { initializeApp } from '../redux/app-reducer'

import Loader from '../common/Loader/Loader';



class MainpageContainer extends React.Component {

   componentDidMount() {
      this.props.initializeApp()
   }

   render() {
      if (!this.props.initialized) {

         return <Loader />
      }


      return (
         <div className='mainpage container'>
            <div className='row'>
               <div className='mainpage__wrapper '>
                  <Navbar />
                  <div className='wrapper-content col-9'>
                     <Route path='/about' component={UserInfo} />
                     <Route exact path='/profile/:userId?' component={ContentUserContainer} />
                     <Route path='/dialogs' component={ContainerContentDialogs} />
                     <Route path='/news' component={ContentNews} />
                     <Route path='/music' component={ContentMusic} />
                     <Route path='/settings' component={Setting} />
                     <Route path='/users' component={UsersContainer} />
                     <Route path='/login' component={Login} />
                  </div>
               </div>
            </div>
         </div>

      )
   }

}
const mapStateToProps = (state) => ({
   initialized: state.app.initialized
})

export default compose(
   withRouter,
   connect(mapStateToProps, { initializeApp }))
   (MainpageContainer)

