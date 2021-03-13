
const ADD_POST = 'ADD-POST'
const NEW_POST_TEXT = 'NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

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
   postText: '',
   userProfile: null
}

const userPageReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST:
         return {
            ...state,
            postText: '',
            posts: [...state.posts, { id: 10, messages: state.postText, likesCount: 32 }],

         }

      case NEW_POST_TEXT: {
         return {
            ...state,
            postText: action.newText
         }

      }
      case SET_USER_PROFILE: {
         return {
            ...state,
            userProfile: action.profile
         }

      }
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
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export default userPageReducer