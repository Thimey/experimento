import * as EXPERIMENT from './experiment.service';

export const addExperiment = (name) => (dispatch) => {
    dispatch({
        type: 'EXPERIMENT_ADD_REQUEST'
    });

    console.log('name', name);
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
