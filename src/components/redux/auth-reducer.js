import { authorized } from "../../API/api"

let SET_AUTH_USER = 'SET_AUTH_USER'

let initialState = {
   authorized: false,
   userId: null,
   email: null,
   login: null,

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

      default:
         return state
   }
}



export const setAuthUser = (authorized, userId, email, login) => ({ type: SET_AUTH_USER, authorized, userId, email, login })

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

export const Login = (email, password, rememderMe, captcha) => {

   let messag

   return async (dispatch) => {

      await authorized.login(email, password, rememderMe)
         .then(response => {

            if (response.data.resultCode === 0) {

               dispatch(setAuthorized());
               (response.data.messages.length === 0) ? messag = 'Authorization is successful' : messag = response.data.messages
               return messag
            } else if (response.data.resultCode === 1) {


               return messag = response.data.messages
            } else {


               return messag = response.data.messages
            }

         })
      return messag
   }
}
export const Logout = () => {
   return (dispatch) => {

      authorized.logout()
         .then(response => {
            if (response.data.resultCode === 0) {
               dispatch(setAuthUser(false, null, null, null))
            }
         })


   }
}

export default authReducer