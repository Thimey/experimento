import React from 'react';
import Experiments from '../experiment/components/Experiments';
const Home = () => (
    <div>
        <div className="text-center">
            <h1 >DoOLeS Experiment App</h1>
            <p><i>component experiment design</i></p>
        </div>
        <div className="col-md-offset-4 col-md-4 text-center">
            <Experiments/>
        </div>

    </div>
);

export default Home;
