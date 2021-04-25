import { authorized, security } from "../../API/api"

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



const setAuthUser = (authorized, userId, email, login) => ({ type: SET_AUTH_USER, authorized, userId, email, login })
const setCaptchaUrl = (payload = '') => ({ type: SET_CAPTCHA_URL, payload })

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

   let messag

   return async (dispatch) => {

      let response = await authorized.login(email, password, rememberMe, captcha)
      if (response.data.resultCode === 0) {
         await dispatch(setAuthorized())
         await dispatch(setCaptchaUrl());

         (response.data.messages.length === 0) ? messag = 'Authorization is successful' : messag = response.data.messages
         return messag
      } else {
         if (response.data.resultCode === 10) {
            debugger
            dispatch(getCaptcha())
            return messag = response.data.messages[0]
         }
         return messag = response.data.messages
      }
   }
}
export const Logout = () => async (dispatch) => {

   let response = await authorized.logout()
   if (response.data.resultCode === 0) {
      dispatch(setAuthUser(false, null, null, null))
   }

}

export const getCaptcha = () => {
   return async (dispatch) => {

      const response = await security.getCaptchaUrl()
      dispatch(setCaptchaUrl(response.data.url))
   }
}

export default authReducer