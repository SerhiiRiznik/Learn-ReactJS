let rerenderEntireTree

let store = {
   _state: {
      userPage: {
         posts: [
            { id: 1, messages: 'Massenges #1', likesCount: 0, name: 'viki', },
            { id: 2, messages: 'Massenges #1', likesCount: 0, name: 'viki', },
            // { id: 3, messages: 'Massenges #1', likesCount: 32, name: 'viki', },
            // { id: 4, messages: 'Massenges #2', likesCount: 12, name: 'serg', },
            // { id: 5, messages: 'Massenges #3', likesCount: 12, name: '', },
            // { id: 6, messages: 'Massenges #3', likesCount: 12, name: '', },
            // { id: 7, messages: 'Massenges #3', likesCount: 12, name: 'Vera', },
            // { id: 8, messages: 'Massenges #3', likesCount: 12, name: '', },
            // { id: 9, messages: 'Massenges #3', likesCount: 12, name: 'Andry', },
         ],
         postText: 'New Messag for Post (from state object)'
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

   newPostText(newText) {
      this._state.userPage.postText = newText
      rerenderEntireTree(store._state)
   },

   addPost() {

      let newPost = {
         id: 10,
         messages: this._state.userPage.postText,
         likesCount: 32,
      }

      this._state.userPage.posts.push(newPost)
      rerenderEntireTree(store._state)

   },

   rerenderEntireTree() {
      console.log("set chenged")
   },


   subscribe(observer) {
      rerenderEntireTree = observer
   }

}


export default store;