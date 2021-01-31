import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Mainpage from './components/Mainpage/Mainpage'
import { BrowserRouter } from "react-router-dom";



const App = (props) => {
  // console.log(props)
  return (
    <div >
      <BrowserRouter>
        <Header />
        <Mainpage
          state={props.state}
          //
          dispatch={props.dispatch}
        //
        // addLikes={props.addLikes} 
        />
        <Footer />

      </BrowserRouter>
    </div>
  );
}


export default App;
