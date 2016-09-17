import {combineReducers} from 'redux';
import experiments from './experiment/reducer';

const rootReducer = combineReducers({
    experiments
});

export default rootReducer;
