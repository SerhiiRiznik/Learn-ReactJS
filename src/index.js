import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './components/redux/state'
import 'bootstrap/dist/css/bootstrap.min.css';

let _rerenderEntireTree = (state) => {
   // console.log(state)

   ReactDOM.render(<App
      // likes={addLikes}
      // Сюда передать store.FUNCTION.bind(store) биндим функцию именно к сторе
      // store={store}

      //
      state={state}

      dispatch={store.dispatch.bind(store)}
   //


   />, document.getElementById('root'));
}
_rerenderEntireTree(store.getState())

store.subscribe(_rerenderEntireTree)