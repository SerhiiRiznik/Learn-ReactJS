
const SEND_MESSAG = 'SEND-MESSAG'
const NEW_MESSAG_TEXT = 'NEW-MESSAG-TEXT'

let initialState = {
   dialogItem: [
      { id: 1, name: 'Viki' },
      { id: 2, name: 'Sveta' },
      { id: 3, name: 'Ivan' },
      { id: 4, name: 'Serg' },
      { id: 5, name: 'Andry' },
      { id: 6, name: 'Andry' },
      { id: 7, name: 'Andry' },
      { id: 7, name: 'Andry' },
      { id: 7, name: 'Andry' },
      { id: 7, name: 'Andry' },
      { id: 7, name: 'Andry' },
      { id: 8, name: 'Kolya' },
      { id: 9, name: 'Vasia' },
   ],
   _messag: [
      { id: 1, message: 'Hi, i`m Sveta' },
      { id: 2, message: 'How are your?' },
      { id: 3, message: 'I`m ok, & your?' },
      { id: 4, message: 'I`m ok, too' },
      { id: 4, message: 'I`m ok, too' },
      { id: 4, message: 'I`m ok, too' },
      { id: 4, message: 'I`m ok, too' },
      { id: 4, message: 'I`m ok, too' },
      { id: 4, message: 'I`m ok, too' },
      { id: 5, message: 'Dekuje, by' },
      { id: 6, message: 'Dekuje, by' },
      { id: 7, message: 'Dekuje, by' },
      { id: 8, message: '' },
      { id: 8, message: 'asdasd' },
   ],
   massegText: ''
}

const messagesReducer = (state = initialState, action) => {
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
         initialState.massegText = action.messag
         console.log(initialState.massegText)
         return initialState
      default:
         return initialState
   }
}
export const newMessagActionCreater = (text) => {
   return { type: 'NEW-MESSAG-TEXT', messag: text }
}
export const sentMessagActionCreater = () => {
   return { type: 'SEND-MESSAG' }
}


export default messagesReducer