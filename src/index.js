import './index.css';
import state from './components/redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { addLikes, addPost, newPostText } from './components/redux/state'
import store from './components/redux/state'

// import { subscribe } from './components/redux/state'

let rerenderEntireTree = (state) => {
   console.log(store)
   ReactDOM.render(<App
      // likes={addLikes}

      store={store}


   />, document.getElementById('root'));

}
rerenderEntireTree(state)

store.subscribe(rerenderEntireTree)