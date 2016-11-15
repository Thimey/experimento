import {combineReducers} from 'redux';
import experiment from './experiment/reducer';

const rootReducer = combineReducers({
    experiment,
});

export default rootReducer;
