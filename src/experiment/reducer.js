const INITIAL_STATE = {
    experiments: [],
    currentExperiment: {}
};

const experiments = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'EXPERIMENT_ADD_SUCCESS':
            return {
                ...state,
                experiments: [
                    ...state.experiments,
                    action.payload
                ]
            };
        case 'EXPERIMENT_GET_ALL_SUCCESS':
            return {
                ...state,
                experiments: action.payload
            };
        case 'EXPERIMENT_GET_SUCCESS':
            return {
                ...state,
                experiment: action.payload
            };
        default:
            return state;
    }
};

export default experiments;
