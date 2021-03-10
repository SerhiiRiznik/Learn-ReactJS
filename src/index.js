import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './components/redux/redux-store'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';

let _rerenderEntireTree = () => {

   ReactDOM.render(

      <Provider store={store}>
         <App />
         {/* <App state={state} dispatch={store.dispatch.bind(store)} /> */}
      </Provider>

      , document.getElementById('root'));

}
_rerenderEntireTree(store.getState())

store.subscribe(() => {
   let state = store.getState()
   _rerenderEntireTree(state)
})