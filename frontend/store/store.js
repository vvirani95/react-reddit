import subReducer from '../reducers/sub_reducer'
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';


const configureStore = () => createStore(subReducer, applyMiddleware(logger));

export default configureStore