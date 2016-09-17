import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const configureStore = () => {

    const middleware = [thunk, logger()];

    return createStore(
        rootReducer,
        applyMiddleware(...middleware)
    );
};

export default configureStore;
