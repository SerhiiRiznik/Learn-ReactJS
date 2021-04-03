import { userAPI, userPageAPI } from "../../API/api"

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'
const UPDATE_USER_STATUS = 'UPDATE_USER_STATUS'

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
   userProfile: null,
   userStatus: '',
}

const userPageReducer = (state = initialState, action) => {

   switch (action.type) {
      case ADD_POST:
         return {
            ...state,
            postText: '',
            posts: [...state.posts, { id: 10, messages: action.text, likesCount: 32 }],

         }
      case SET_USER_PROFILE: {
         return {
            ...state,
            userProfile: action.profile
         }
      }
      case UPDATE_USER_STATUS: {

         return {
            ...state,
            userStatus: action.userStatus
         }
      }
      case SET_USER_STATUS: {
         return {
            ...state,
            userStatus: action.status

         }
      }
      default:
         return state;
   }
}

export const addPost = (text) => {
   return { type: ADD_POST, text }
}


export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const updateUserStatus = (userStatus) => ({ type: UPDATE_USER_STATUS, userStatus })

export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })

export const setProfilePage = (userId) => {
   return (dispatch) => {
      userAPI.getUser(userId).then(response => {
         dispatch(setUserProfile(response))
      })
   }
}



export const updateStatus = (userStatus) => {
   return (dispatch) => {

      userPageAPI.updateStatus(userStatus)
         .then(response => {
            if (response.data.resultCode === 0) {
               dispatch(updateUserStatus(userStatus))
            }
         })
   }
}
export const setStatus = (userId) => {
   return (dispatch) => {

      userPageAPI.status(userId)
         .then(response => {

            if (response.status === 200) {
               dispatch(setUserStatus(response.data))
            }
         })
   }
}



export default userPageReducer