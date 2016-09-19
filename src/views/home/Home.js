import React from 'react';
import AddExperiment from '../../experiment/components/AddExperiment';
import ExperimentsList from '../../experiment/components/ExperimentsList';
const Home = () => (
    <div>
        <div className="text-center">
            <h1 >DoOLeS Experiment App</h1>
            <p><i>component experiment design</i></p>
        </div>
        <div className="col-md-offset-4 col-md-4 text-center">
            <AddExperiment/>
            <ExperimentsList/>
        </div>

    </div>
);

export default Home;
