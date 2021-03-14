import { combineReducers, createStore } from 'redux';
import userPageReducer from './userpage-reducer'
import messagesReducer from './messages-reducer'
import UsersReducer from './users-reducer';
import authReducer from './auth-reducer';

let reducers = combineReducers({
   _messages: messagesReducer,
   userPage: userPageReducer,
   usersPage: UsersReducer,
   auth: authReducer,

})

let store = createStore(reducers)

window.store = store

export default store