import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './components/redux/redux-store'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/Login/login';

ReactDOM.render(

   <Provider store={store}>

      <BrowserRouter>

         <Route path='/login' render={() => <Login />} />
         <Route path='/' render={() => <App />} />
         {/* <App /> */}
      </BrowserRouter>
   </Provider>

   , document.getElementById('root'));

