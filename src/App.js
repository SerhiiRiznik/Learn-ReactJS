import React from 'react';
import './App.css';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Mainpage from './components/Mainpage/Mainpage'


const App = (props) => {
  console.log(props)
  return (
    <div >
      <Header />
      <Mainpage
        store={props.store}

      // addLikes={props.addLikes} 
      />
      <Footer />
    </div>
  );
}


export default App;
