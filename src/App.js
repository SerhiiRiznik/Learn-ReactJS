import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './components/Footer/Footer';
import HeaderContainer from './components/Header/HeaderContainer';
import Mainpage from './components/Mainpage/Mainpage'



const App = (props) => {

  return (

    <>

      <HeaderContainer />
      <Mainpage />
      <Footer />
    </>


  );
}


export default App;
