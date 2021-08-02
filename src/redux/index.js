import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const logger = () => next => action => next(action)

const store = createStore(rootReducer, applyMiddleware(logger, thunk))

export default store