import React from 'react';

import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Mainpage from './components/Mainpage/Mainpage'


const App = (props) => {

  return (
    <div >
      <Header />
      <Mainpage state={props.state} />
      <Footer />
    </div>
  );
}







export default App;
