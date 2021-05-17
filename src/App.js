import React, { useEffect } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './components/Footer/Footer';
import HeaderContainer from './components/Header/HeaderContainer';
import MainpageContainer from './components/Mainpage/Mainpage'
import NotFound from '../src/components/common/404/NotFound'
import Loader from '../src/components/common/Loader/Loader'
import Alert from '../src/components/common/Alert/Alert'
import { compose } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import { setProfilePage, } from '../src/components/redux/userpage-reducer'
import { initializeApp } from '../src/components/redux/app-reducer'
import { setWindowWidth } from '../src/components/redux/mobile-reducer'
import { hideAlert } from './components/redux/alert-reducer'

const App = ({ initializeApp, initialized, setProfilePage, setWindowWidth, alert, hideAlert, ...props }) => {
  // console.log(props);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    initializeApp(15738) // ALERT
  }, []);

  useEffect(() => {
    function resize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);


  if (!initialized) {
    return <Loader />
  }
  return (
    <>
      { alert.active && <Alert {...alert} hideAlert={hideAlert} />}
      {

        (props.location.pathname === '/404NotFound') ? <NotFound /> :
          (<div className=''>
            <HeaderContainer />
            <MainpageContainer />
            <Footer />
          </div>)
      }
    </>
  )
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
  profile: state.userPage.userProfile,
  alert: state.alert,
})

export default compose(
  withRouter,
  connect(mapStateToProps, { setProfilePage, initializeApp, setWindowWidth, hideAlert })
)(App)

