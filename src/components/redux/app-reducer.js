
import { userAPI } from "../../API/api"
import { setAuthorized } from "./auth-reducer"


let SET_INITIALIZED = 'SET_INITIALIZED'
let SET_USER_PROFILE_PHOTO = 'SET_USER_PROFILE_PHOTO'

let initialState = {
   initialized: false,
   userProfilePhoto: null,

}


const appReducer = (state = initialState, action) => {

   switch (action.type) {

      case SET_INITIALIZED:
         return {
            ...state,
            initialized: true,
         }
      case SET_USER_PROFILE_PHOTO:

         return {
            ...state,
            userProfilePhoto: action.userProfilePhoto,
         }
      default:
         return state
   }
}

// ACTION
const setInitialized = () => ({ type: SET_INITIALIZED })
const setUserProfile = (userProfilePhoto) => ({ type: SET_USER_PROFILE_PHOTO, userProfilePhoto })

// THUNK CREATOR
export const initializeApp = (userId) => {

   return async (dispatch) => {

      await userAPI.getUser(userId).then(response => {
         dispatch(setUserProfile(response.photos))

      })
      let promise = await dispatch(setAuthorized())
      Promise.all([promise])
         .then(() => {
            dispatch(setInitialized())
         })
   }
}




export default appReducer