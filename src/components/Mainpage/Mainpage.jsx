import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import React, { Suspense } from 'react'
import Navbar from "./Navbar/Navbar";
import Login from "../Login/login";
import { compose } from 'redux';
import style from './Mainpage.module.css'


const UsersContainer = React.lazy(() => import('./Users/UsersContainer'));
const ContentUserContainer = React.lazy(() => import('./Content/ContentUserContainer'));
const Info = React.lazy(() => import('./Info/Info'));
const ContentMusic = React.lazy(() => import('./Music/ContentMusic'));
const ContentNews = React.lazy(() => import('./News/ContentNews'));
const UserInfo = React.lazy(() => import('./Content/UserInfo/UserInfo'));
const ContainerContentDialogs = React.lazy(() => import('./Dialogs/ContainerContentDialogs'));
const Settings = React.lazy(() => import('../Settings/Settings'));



const MainpageContainer = (props) => {

   return (
      <div className='mainpage container mt-4'>
         <div className='row '>
            {/* <Navigation /> */}
            <Navbar />
            <div className={`col-md-9 p-0-right ${style.pageContent}`}>
               <Suspense fallback={<div></div>}>
                  <Switch>
                     <Route path='/profile/:userId?' component={ContentUserContainer} />
                     <Route path='/users' component={UsersContainer} />
                     <Route path='/dialogs' component={ContainerContentDialogs} />
                     <Route path='/news' component={ContentNews} />
                     <Route path='/music' component={ContentMusic} />
                     <Route path='/settings' component={Settings} />
                     <Route path='/login' component={Login} />
                     <Route path='/about' component={UserInfo} />
                     <Route exact path='/' component={Info} />
                     <Route path="*">
                        <Redirect to={'/404NotFound'}
                        />
                     </Route>
                  </Switch>
               </Suspense>
            </div>

         </div>
      </div>
   )
}

export default compose(
   withRouter
)(MainpageContainer)

// export default MainpageContainer

