import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import logger from 'redux-logger';

const configureStore = (preloadedState = {}) => (
    createStore(
		rootReducer,
		preloadedState,
		applyMiddleware(thunk, logger)
	)
);

export default configureStore;