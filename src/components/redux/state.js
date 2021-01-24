



let store = {
   _state: {
      userPage: {
         posts: [
            { id: 1, messages: 'Massenges #1', likesCount: 0, name: 'viki', },
            { id: 2, messages: 'Massenges #2', likesCount: 2, name: 'SErg', },
            // { id: 3, messages: 'Massenges #1', likesCount: 32, name: 'viki', },
            // { id: 4, messages: 'Massenges #2', likesCount: 12, name: 'serg', },
            // { id: 5, messages: 'Massenges #3', likesCount: 12, name: '', },
            // { id: 6, messages: 'Massenges #3', likesCount: 12, name: '', },
            // { id: 7, messages: 'Massenges #3', likesCount: 12, name: 'Vera', },
            // { id: 8, messages: 'Massenges #3', likesCount: 12, name: '', },
            // { id: 9, messages: 'Massenges #3', likesCount: 12, name: 'Andry', },
         ],
         postText: ''
      },
      _messages: {
         dialogItem: [
            { id: 1, name: 'Viki' },
            { id: 2, name: 'Sveta' },
            { id: 3, name: 'Ivan' },
            { id: 4, name: 'Serg' },
            { id: 5, name: 'Andry' },
            { id: 6, name: 'Andry' },
            { id: 7, name: 'Andry' },
            { id: 7, name: 'Andry' },
            { id: 7, name: 'Andry' },
            { id: 7, name: 'Andry' },
            { id: 7, name: 'Andry' },
            { id: 8, name: 'Kolya' },
            { id: 9, name: 'Vasia' },
         ],
         _messag: [
            { id: 1, message: 'Hi, i`m Sveta' },
            { id: 2, message: 'How are your?' },
            { id: 3, message: 'I`m ok, & your?' },
            { id: 4, message: 'I`m ok, too' },
            { id: 4, message: 'I`m ok, too' },
            { id: 4, message: 'I`m ok, too' },
            { id: 4, message: 'I`m ok, too' },
            { id: 4, message: 'I`m ok, too' },
            { id: 4, message: 'I`m ok, too' },
            { id: 5, message: 'Dekuje, by' },
            { id: 6, message: 'Dekuje, by' },
            { id: 7, message: 'Dekuje, by' },
            { id: 8, message: '' },
            { id: 8, message: 'asdasd' },
         ]
      }
   },
   _rerenderEntireTree() {
      console.log("_state chenged")
   },
   //------------------------------------------------------------------------------------
   getState() {
      return this._state
   },
   subscribe(observer) {
      this._rerenderEntireTree = observer
   },
   //------------------------------------------------------------------------------------

   dispatch(action) {
      // debugger
      // console.log(action)
      // (action)-обэкт/действия  {type: 'ADD-POST'} {type: 'NEW-POST-TEXT'} обизательный свойство type !!!!
      if (action.type === 'ADD-POST') {
         if (this._state.userPage.postText.length > 0) {
            let newPost = {
               id: 10,
               messages: this._state.userPage.postText,
               likesCount: 32,
            }
            this._state.userPage.posts.push(newPost)
            this._rerenderEntireTree(this._state)
            this._state.userPage.postText = ''
         }


      } else if (action.type === 'NEW-POST-TEXT') {
         this._state.userPage.postText = action.newText
         console.log(this._state.userPage.postText)

         this._rerenderEntireTree(this._state)
      }
      else if (action.type === 'ADD-LIKE') {




         console.log(action)
         console.log(action.type)
         console.log(action.id)

         // this._rerenderEntireTree(this._state)
      }
   }
}


export const addPostActionCreater = () => {
   return { type: 'ADD-POST' }
}
export const newPostTextActionCreater = (text) => {
   return { type: 'NEW-POST-TEXT', newText: text }
}

export const addLikeCountActionCreater = (index) => {
   return { type: 'ADD-LIKE', id: index }
}

window.store = store

export default store;