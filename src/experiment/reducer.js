const experiments = (state = [], action) => {
    switch (action.type) {
        case 'EXPERIMENT_ADD_SUCCESS':
            return [
                ...state,
                action.payload
            ];
        case 'EXPERIMENT_ADD_REQUEST':
            return state;
        case 'EXPERIMENT_GET_ALL_SUCCESS':
            return action.payload;
        default:
            return state;
    }
};

export default experiments;
