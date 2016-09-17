const experiments = (state = [], action) => {
    switch (action.type) {
        case 'EXPERIMENT_ADD_SUCCESS':
            return [
                ...state,
                action.payload
            ];
        case 'EXPERIMENT_ADD_REQUEST':
            return state
        default:
            return state;
    }
};

export default experiments;
