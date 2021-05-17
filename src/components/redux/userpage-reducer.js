import { userAPI, usersPageAPI } from "../../API/api"

const LOADING = 'LOADING'
const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'
const UPDATE_USER_STATUS = 'UPDATE_USER_STATUS'
const SET_USER_PHOTO = 'SET_USER_PHOTO'

let initialState = {
   loading: false,
   posts: [
      { id: 1, messages: 'Massenges #1', likesCount: 0, name: 'viki', },
      { id: 2, messages: 'Massenges #2', likesCount: 2, name: 'SErg', },
   ],
   postText: '',
   userProfile: null,
   userStatus: '',
}

const userPageReducer = (state = initialState, action) => {

   switch (action.type) {
      case LOADING:
         return {
            ...state,
            loading: action.payload
         }
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
      case SET_USER_PHOTO: {
         return {
            ...state,
            userProfile: {
               ...state.userProfile,
               photos: action.photo
            }
         }

      }
      default: return state;
   }
}
// ACTION
export const loading = (payload) => ({ type: LOADING, payload })
export const addPost = (text) => ({ type: ADD_POST, text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const updateUserStatus = (userStatus) => ({ type: UPDATE_USER_STATUS, userStatus })
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })

// THUNK CREATOR
export const setProfilePage = (userId) => {
   return async (dispatch) => {
      dispatch(loading(true))
      await userAPI.getUser(userId).then(response => {
         dispatch(setUserProfile(response))
      })
      dispatch(loading(false))
   }
}

const setLoadPhoto = (photo) => ({ type: SET_USER_PHOTO, photo })

export const loadPhoto = (photo) => async (dispatch) => {

   let response = await userAPI.getUsersPhoto(photo)
   if (response.data.resultCode === 0) {
      dispatch(setLoadPhoto(response.data.data.photos))
   }

}


export const updateStatus = (userStatus) => async (dispatch) => {

   let response = await usersPageAPI.updateStatus(userStatus)
   if (response.data.resultCode === 0) {
      dispatch(updateUserStatus(userStatus))
   }

}
export const setStatus = (userId) => async (dispatch) => {

   let response = await usersPageAPI.status(userId)
   if (response.status === 200) {
      dispatch(setUserStatus(response.data))
   }

}



export default userPageReducer