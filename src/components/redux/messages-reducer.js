
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
      { id: 9, message: 'asdasd' },
   ],
   massegText: ''
}

const messagesReducer = (state = initialState, action) => {



   switch (action.type) {

      case SEND_MESSAG:

         return {
            ...state,
            massegText: '',
            _messag: [...state._messag, { id: 20, message: state.massegText }]
         }


      case NEW_MESSAG_TEXT:

         return {
            ...state,
            massegText: action.messag
         }

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