
let SET_WINDOW_WIDTH = 'SET_WINDOW_WIDTH'

let initialState = {
   windowWidth: null,

}


const mobileReducer = (state = initialState, action) => {

   switch (action.type) {

      case SET_WINDOW_WIDTH:
         return {
            ...state,
            windowWidth: action.width,
         }
      default:
         return state
   }
}

// ACTION CREATOR
const windowWidth = (width) => ({ type: SET_WINDOW_WIDTH, width })

// THUNK CREATOR
export const setWindowWidth = (width) => {

   return (dispatch) => {
      (width <= 900) ? dispatch(windowWidth(true)) :
         dispatch(windowWidth(false))
   }
}




export default mobileReducer