import { createStore, applyMiddleware, combineReducers } from 'redux';
import user from './user';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  user,
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger())
);

const store = createStore(rootReducer, middleware);

export default store;
