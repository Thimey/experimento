import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import ExperimentListItem from './ExperimentListItem';

class ExperimentsList extends Component {
    componentWillMount() {
        const {getExperiments} = this.props;
        getExperiments();
    }

    render () {
        const {experiments} = this.props;
        return (
            <ul className="list-group">
                {experiments.map(experiment =>
                    <ExperimentListItem key={experiment._fields[0].properties.id} {...experiment._fields[0].properties}/>
                )}
            </ul>
        );
    }
}

const mapStateToProps = (state) => (
    {experiments: state.experiment.experiments}
);

ExperimentsList = connect(mapStateToProps, actions)(ExperimentsList);
export default ExperimentsList;
