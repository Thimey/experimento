import React from 'react';
import {connect} from 'react-redux';
import {addExperiment} from '../actions';

let AddExperiment = ({dispatch}) => {
    let input;
    return (
        <div>
            <input type="text" placeholder="Name" ref={node => {
                input = node;
            }}/>
            <button onClick={() => {
               dispatch(addExperiment(input.value));
            }}>
                Add Experiment
            </button>
        </div>
    );
};

AddExperiment = connect()(AddExperiment);

export default AddExperiment;
