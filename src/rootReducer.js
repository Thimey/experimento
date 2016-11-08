import {combineReducers} from 'redux';
import experiments from './experiment/reducer';
import experiment from './views/experiment/reducer';

const rootReducer = combineReducers({
    experiments,
    experiment
});

export default rootReducer;
