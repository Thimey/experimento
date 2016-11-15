import React from 'react';
import {Route} from 'react-router';
import App from './App';
import Experiment from './views/experiment/Experiment';
import ExperimentComponent from './views/experiment-component/ExperimentComponent';
import VariablePool from './views/variable-pool/VariablePool';
import Experiments from './views/experiements/Experiments';

export default(
    <Route path="/" component={App}>
        <Route indexRoute component={Experiments}></Route>
        <Route path="/experiment/:id" component={Experiment}></Route>
        <Route path="/experiment-component/:id" component={ExperimentComponent}></Route>
        <Route path="/variable-pool" component={VariablePool}></Route>
    </Route>
);
