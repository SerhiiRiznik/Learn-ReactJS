import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './components/Footer/Footer';
import HeaderContainer from './components/Header/HeaderContainer';
import MainpageContainer from './components/Mainpage/Mainpage'
import { connect } from 'react-redux';

const App = ({ auth }) => {
  return (
    <div className=''>
      <HeaderContainer />

      <MainpageContainer />

      <Footer />
    </div>
  )

}

const mapStateToProps = (state) => ({
  auth: state.auth
})


export default connect(mapStateToProps, null)(App);
