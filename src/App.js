import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './components/Footer/Footer';
import HeaderContainer from './components/Header/HeaderContainer';
import Mainpage from './components/Mainpage/Mainpage'
import { BrowserRouter } from "react-router-dom";



const App = (props) => {
  // console.log(props)
  return (
    <div >
      <BrowserRouter>
        <HeaderContainer />
        <Mainpage />
        <Footer />

      </BrowserRouter>
    </div>
  );
}


export default App;
