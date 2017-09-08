import { createStore, applyMiddleware } from 'redux';

// import rootReducer from './reducers';
//will set up combineReducer later!

import createLogger  from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
// import socket from './socket';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers'

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger()))
)

export * from './reducers';
