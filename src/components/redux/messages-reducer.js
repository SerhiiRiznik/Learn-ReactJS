
const SEND_MESSAG = 'SEND-MESSAG'
const NEW_MESSAG_TEXT = 'NEW-MESSAG-TEXT'

const messagesReducer = (state, action) => {


   // console.log(action)
   // (action)-обэкт/действия  {type: 'ADD-POST'} {type: 'NEW-POST-TEXT'} обизательный свойство type !!!!

   switch (action.type) {

      case SEND_MESSAG:
         let masseg = state.massegText
         let newMasseg = {
            id: 10,
            message: masseg
         }
         state._messag.push(newMasseg)
         state.massegText = ''
         return state

      case NEW_MESSAG_TEXT:
         state.massegText = action.messag
         console.log(state.massegText)
         return state
      default:
         return state
   }
}
export const newMessagActionCreater = (text) => {
   return { type: 'NEW-MESSAG-TEXT', messag: text }
}
export const sentMessagActionCreater = () => {
   return { type: 'SEND-MESSAG' }
}


export default messagesReducer