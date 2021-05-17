import { combineReducers, createStore, applyMiddleware, compose } from 'redux';

import thunkMiddleware from 'redux-thunk';
import userPageReducer from './userpage-reducer'
import messagesReducer from './messages-reducer'
import UsersReducer from './users-reducer';
import authReducer from './auth-reducer';
import appReducer from './app-reducer';
import settingsReducer from './settings-reducer';
import mobileReducer from './mobile-reducer';
import alertReducer from './alert-reducer';



let reducers = combineReducers({
   auth: authReducer,
   messages: messagesReducer,
   userPage: userPageReducer,
   usersPage: UsersReducer,
   app: appReducer,
   settings: settingsReducer,
   mobileReducer: mobileReducer,
   alert: alertReducer,

})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))


export default store