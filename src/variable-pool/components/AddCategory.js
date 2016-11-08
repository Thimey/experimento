import React from 'react';
import {connect} from 'react-redux';
import {addExperiment} from '../actions';

let AddExperiment = ({addExperiment}) => {
    let input;
    return (
        <div>
            <input
                type="text"
                placeholder="Add Category"
                onKeyDown={(e) => {
                    if (e.which === 13) {
                        addExperiment(e.target.value);
                        e.target.value = '';
                    }
                }}
            />
        </div>
    );
};

AddExperiment = connect(null, {addExperiment})(AddExperiment);

export default AddExperiment;
