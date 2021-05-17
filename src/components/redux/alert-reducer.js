
let SHOW_ALERT = 'SHOW_ALERT'
let SET_HIDE_ALERT = 'SET_HIDE_ALERT'

let initialState = {
   active: false,
   info: '',
   message: ''

}


const alertReducer = (state = initialState, action) => {

   switch (action.type) {
      case SHOW_ALERT:
         return {
            ...state,
            active: true,
            info: action.info,
            message: action.message
         }
      case SET_HIDE_ALERT:
         return {
            ...state,
            active: false,
         }
      default:
         return state
   }
}


// ACTION TYPE
export const setShowAlert = (info, message) => ({ type: SHOW_ALERT, info, message })
export const setHideAlert = () => {
   return { type: SET_HIDE_ALERT }
}



// THUNK CREATOR
export const alertApp = () => {

   return async (dispatch) => {
   }
}

export const hideAlert = () => {

   return async function (dispatch) {
      await dispatch(setHideAlert())
   }

}
export const showAlert = (info, message) => {
   return async (dispatch) => {

      await dispatch(setShowAlert(info, message))
   }
}




export default alertReducer