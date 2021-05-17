import { userAPI, usersPageAPI } from "../../API/api"
import { hideAlert, showAlert } from "./alert-reducer"


let SET_SETTINGS = 'SET_SETTINGS'
let SET_SETTING_PROFILE = 'SET_SETTING_PROFILES'

let initialState = {

}


const settingsReducer = (state = initialState, action) => {

   switch (action.type) {

      case SET_SETTING_PROFILE: {
         return {
            ...state,
            userProfile: action.profile
         }
      }

      default:
         return state
   }
}
export const setUserProfile = (profile) => ({ type: SET_SETTING_PROFILE, profile })
export const setProfilePage = (userId) => {

   return async (dispatch) => {
      await userAPI.getUser(userId).then(response => {
         dispatch(setUserProfile(response))
      })
   }
}

// ACTION
export const setSettings = () => ({ type: SET_SETTINGS })

// THUNK CREATOR
export const settingProfile = (settings) => {
   return async (dispatch) => {

      let response = await usersPageAPI.settingsProfile(settings)
      await dispatch(setSettings())

      if (response.data.resultCode === 0) {
         dispatch(showAlert('alert-success', 'saved'))
         setTimeout(() => {
            dispatch(hideAlert())
         }, 5000)

      }

   }
}


export default settingsReducer