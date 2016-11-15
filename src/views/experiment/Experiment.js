import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../experiment/actions';

import AddExperimentComponent from '../../experiment-component/components/AddExperimentComponent';

class Experiment extends Component {
    componentWillMount() {
        const {params, getExperiment} = this.props;
        getExperiment(params.id);
    }

    render() {
        const {experiment} = this.props;
        return (
            <div>
                <div className="text-align">
                    <h1>{experiment.name}</h1>
                    <Link/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {experiment: state.experiment}
);

Experiment = connect(mapStateToProps, actions)(Experiment);

export default Experiment;
