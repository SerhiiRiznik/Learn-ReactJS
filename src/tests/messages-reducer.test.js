import messagesReducer, { sentMessag } from '../components/redux/messages-reducer'



let state = {
   dialogItem: [
      { id: 1, name: 'Viki' },
   ],
   _messag: [
      { id: 1, message: 'Hi, i`m Sveta' },
   ],
}

it('new messag mast be sented', () => {
   // 1. test Data
   // 2. action
   let action = sentMessag('new messag')
   let newState = messagesReducer(state, action)
   // 3.expect
   expect(newState._messag.length).toBe(1)
})

// it('new messag.length mast be more 0', () => {
//    // 1. test Data
//    // 2. action
//    let action = sentMessag(text)
//    let newState = messagesReducer(state, action)
//    // 3.expect
//    expect(newState._messag.length).toBe()
// })