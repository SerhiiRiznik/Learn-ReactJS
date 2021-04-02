import { combineReducers, createStore, applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';
import userPageReducer from './userpage-reducer'
import messagesReducer from './messages-reducer'
import UsersReducer from './users-reducer';
import authReducer from './auth-reducer';
import appReducer from './app-reducer';



let reducers = combineReducers({
   auth: authReducer,
   _messages: messagesReducer,
   userPage: userPageReducer,
   usersPage: UsersReducer,
   app: appReducer,


})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store