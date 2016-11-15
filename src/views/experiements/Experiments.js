import React from 'react';
import AddExperiment from '../../experiment/components/AddExperiment';
import ExperimentList from '../../experiment/components/ExperimentsList';

export default () => (
    <div>
        <div className="text-center">
            <h1>DoOLeS Experiment App</h1>
            <p><i>component experiment design</i></p>
        </div>
        <AddExperiment/>
        <ExperimentList/>
    </div>
);
