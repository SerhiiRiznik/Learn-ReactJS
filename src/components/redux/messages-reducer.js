
const SEND_MESSAG = 'SEND-MESSAG'

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
   messag: [
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
}

const messagesReducer = (state = initialState, action) => {



   switch (action.type) {

      case SEND_MESSAG:

         return {
            ...state,
            messag: [...state.messag, { id: 20, message: action.messag }],

         }


      default:
         return state
   }
}

export const sentMessag = (text) => {
   return { type: SEND_MESSAG, messag: text }
}


export default messagesReducer