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
export default authReducer


export const setAuthUser = (authorized, userId, email, login) => ({ type: SET_AUTH_USER, authorized, userId, email, login })