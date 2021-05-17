import { authorized, security } from "../../API/api"
import { hideAlert, showAlert } from "./alert-reducer"

let SET_AUTH_USER = 'SET_AUTH_USER'
let SET_CAPTCHA_URL = 'SET_CAPTCHA_URL'

let initialState = {
   authorized: false,
   userId: null,
   email: null,
   login: null,
   captchaUrl: null,

}


const authReducer = (state = initialState, action) => {
   switch (action.type) {

      case SET_AUTH_USER:
         return {
            ...state,
            authorized: action.authorized,
            userId: action.userId,
            email: action.email,
            login: action.login,
         }
      case SET_CAPTCHA_URL:
         return {
            ...state,
            captchaUrl: action.payload,
         }

      default:
         return state
   }
}


// ACTION
const setAuthUser = (authorized, userId, email, login) => ({ type: SET_AUTH_USER, authorized, userId, email, login })
const setCaptchaUrl = (payload = '') => ({ type: SET_CAPTCHA_URL, payload })

// THUNK CREATOR
export const setAuthorized = () => {
   return (dispatch) => {
      return authorized.getUserAuth()
         .then(response => {
            let { id, email, login } = response.data
            if (response.resultCode === 0) {
               dispatch(setAuthUser(true, id, email, login))
            }
         })
   }
}

export const Login = (email, password, rememberMe, captcha) => {
   return async (dispatch) => {
      let response = await authorized.login(email, password, rememberMe, captcha)
      if (response.data.resultCode === 0) {
         await dispatch(setAuthorized())
         await dispatch(setCaptchaUrl());
         await dispatch(showAlert('alert-success', 'You are logged in'))
         setTimeout(() => {
            dispatch(hideAlert())
         }, 4000)
      } else if (response.data.resultCode === 1) {
         await dispatch(showAlert('alert-danger', response.data.messages[0]))
         await setTimeout(() => {
            dispatch(hideAlert())
         }, 4000)
      } else {
         if (response.data.resultCode === 10) {

            await dispatch(getCaptcha())
            await dispatch(showAlert('alert-warning', response.data.messages[0]))
            await setTimeout(() => {
               dispatch(hideAlert())
            }, 4000)
         }
      }
   }
}
export const logout = () => async (dispatch) => {

   let response = await authorized.logout()
   if (response.data.resultCode === 0) {
      dispatch(setAuthUser(false, null, null, null))
   }
   // HI
}

export const getCaptcha = () => {
   return async (dispatch) => {

      const response = await security.getCaptchaUrl()
      dispatch(setCaptchaUrl(response.data.url))
   }
}

export default authReducer