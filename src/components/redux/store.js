// // import React from 'react'

// import messagesReducer from "./messages-reducer"
// import userPageReducer from "./userpage-reducer"



// let store = {
//    _state: {
//       userPage: {
//          posts: [
//             { id: 1, messages: 'Massenges #1', likesCount: 0, name: 'viki', },
//             { id: 2, messages: 'Massenges #2', likesCount: 2, name: 'SErg', },
//             // { id: 3, messages: 'Massenges #1', likesCount: 32, name: 'viki', },
//             // { id: 4, messages: 'Massenges #2', likesCount: 12, name: 'serg', },
//             // { id: 5, messages: 'Massenges #3', likesCount: 12, name: '', },
//             // { id: 6, messages: 'Massenges #3', likesCount: 12, name: '', },
//             // { id: 7, messages: 'Massenges #3', likesCount: 12, name: 'Vera', },
//             // { id: 8, messages: 'Massenges #3', likesCount: 12, name: '', },
//             // { id: 9, messages: 'Massenges #3', likesCount: 12, name: 'Andry', },
//          ],
//          postText: ''
//       },
//       _messages: {
//          dialogItem: [
//             { id: 1, name: 'Viki' },
//             { id: 2, name: 'Sveta' },
//             { id: 3, name: 'Ivan' },
//             { id: 4, name: 'Serg' },
//             { id: 5, name: 'Andry' },
//             { id: 6, name: 'Andry' },
//             { id: 7, name: 'Andry' },
//             { id: 7, name: 'Andry' },
//             { id: 7, name: 'Andry' },
//             { id: 7, name: 'Andry' },
//             { id: 7, name: 'Andry' },
//             { id: 8, name: 'Kolya' },
//             { id: 9, name: 'Vasia' },
//          ],
//          _messag: [
//             { id: 1, message: 'Hi, i`m Sveta' },
//             { id: 2, message: 'How are your?' },
//             { id: 3, message: 'I`m ok, & your?' },
//             { id: 4, message: 'I`m ok, too' },
//             { id: 4, message: 'I`m ok, too' },
//             { id: 4, message: 'I`m ok, too' },
//             { id: 4, message: 'I`m ok, too' },
//             { id: 4, message: 'I`m ok, too' },
//             { id: 4, message: 'I`m ok, too' },
//             { id: 5, message: 'Dekuje, by' },
//             { id: 6, message: 'Dekuje, by' },
//             { id: 7, message: 'Dekuje, by' },
//             { id: 8, message: '' },
//             { id: 8, message: 'asdasd' },
//          ],
//          massegText: ''
//       }
//    },
//    _rerenderEntireTree() {
//       console.log("_state chenged")
//    },
//    //------------------------------------------------------------------------------------
//    getState() {
//       return this._state
//    },
//    subscribe(observer) {
//       this._rerenderEntireTree = observer
//    },
//    //------------------------------------------------------------------------------------

//    dispatch(action) {

//       this._state.userPage = userPageReducer(this._state.userPage, action)
//       this._state._messages = messagesReducer(this._state._messages, action)

//       this._rerenderEntireTree(this._state)
//       // debugger
//       // console.log(action)
//       // (action)-обэкт/действия  {type: 'ADD-POST'} {type: 'NEW-POST-TEXT'} обизательный свойство type !!!!
//    }
// }




// window.store = store

// export default store;