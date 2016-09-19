import * as EXPERIMENT from './experiment.service';

export const addExperiment = (name) => (dispatch) => {
    dispatch({
        type: 'EXPERIMENT_ADD_REQUEST'
    });
    return EXPERIMENT
        .create({name})
        .then(response => {
            console.log('response', response);
            dispatch({
                type: 'EXPERIMENT_ADD_SUCCESS',
                payload: response.data
            })
        });
};

export const getExperiments = () => (dispatch) => {
    dispatch({
        type: 'EXPERIMENT_GET_ALL_REQUEST'
    });
    return EXPERIMENT
        .getAll()
        .then(response => {
            dispatch({
                type: 'EXPERIMENT_GET_ALL_SUCCESS',
                payload: response.data
            });
        });
};
