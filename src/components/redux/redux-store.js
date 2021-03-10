import { combineReducers, createStore } from 'redux';
import userPageReducer from './userpage-reducer'
import messagesReducer from './messages-reducer'

let reducers = combineReducers({
   _messages: messagesReducer,
   userPage: userPageReducer,

})

let store = createStore(reducers)

export default store