
const ADD_POST = 'ADD-POST'
const NEW_POST_TEXT = 'NEW-POST-TEXT'
// const ADD_LIKE = 'ADD-LIKE'

let initialState = {
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
}

const userPageReducer = (state = initialState, action) => {
   // debugger
   // console.log(action)
   // (action)-обэкт/действия  {type: 'ADD-POST'} {type: 'NEW-POST-TEXT'} обизательный свойство type !!!!

   // добавить проверку на длину добавления поста (більше 0 символа добавляем)
   switch (action.type) {
      case ADD_POST:
         let newPost = {
            id: 10,
            messages: state.postText,
            likesCount: 32,
         }
         state.posts.push(newPost)
         state.postText = ''
         return state
      case NEW_POST_TEXT:
         state.postText = action.newText
         console.log(state.postText)
         return state
      default:
         return state;
   }
}

export const addPostActionCreater = () => {
   return { type: 'ADD-POST' }
}
export const newPostTextActionCreater = (text) => {
   return { type: 'NEW-POST-TEXT', newText: text }
}

export const addLikeCountActionCreater = (index, a) => {
   return { type: 'ADD-LIKE', id: index, like: a }
}

export default userPageReducer