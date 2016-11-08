const experiment = (state = [], action) => {
    switch (action.type) {
        case 'EXPERIMENT_GET_SUCCESS':
            return action.payload;
        default:
            return state;
    }
};

export default experiment;
