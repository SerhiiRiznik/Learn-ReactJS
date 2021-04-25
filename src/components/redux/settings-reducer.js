import { userAPI, userPageAPI } from "../../API/api"
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


export const setSettings = () => ({ type: SET_SETTINGS })

export const settingProfile = (settings) => {
   return async (dispatch) => {

      let messag
      let response = await userPageAPI.settingsProfile(settings)
      await dispatch(setSettings())

      if (response.data.resultCode === 0) {
         return messag = 'Saved'
      } else {
         return messag = response.data.messages
      }

   }
}


export default settingsReducer