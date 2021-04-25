import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './components/redux/redux-store'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(

   <Provider store={store}>

      <BrowserRouter>
         <App />
      </BrowserRouter>
   </Provider>

   , document.getElementById('root'));

