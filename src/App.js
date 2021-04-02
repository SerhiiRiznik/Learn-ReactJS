import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './components/Footer/Footer';
import HeaderContainer from './components/Header/HeaderContainer';
import MainpageContainer from './components/Mainpage/Mainpage'
import { Route } from 'react-router';
import Login from './components/Login/login';
import { connect } from 'react-redux';







const App = ({ auth }) => {
  // console.log(auth)
  return (
    <div className=''>
      <HeaderContainer />

      <MainpageContainer />
      {/* <Route path='/login' component={Login} /> */}

      {/* {auth.authorized ? <MainpageContainer /> : <Route path='/login' component={Login} />} */}
      <Footer />
    </div>
  )

}

const mapStateToProps = (state) => ({
  auth: state.auth
})


export default connect(mapStateToProps, null)(App);
