import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import ExperimentListItem from './ExperimentListItem';

class ExperimentsList extends Component {

    componentDidMount() {
        const {getExperiments} = this.props;
        getExperiments();
    }

    render () {
        console.log('props', this.props);
        const {experiments} = this.props;
        return (
            <ul className="list-group">
                {experiments.map(experiment =>
                    <ExperimentListItem key={experiment._id} {...experiment}/>
                )}
            </ul>
        );
    }
}

const mapStateToProps = (state) => (
    {experiments: state.experiments}
);

ExperimentsList = connect(mapStateToProps, actions)(ExperimentsList);
export default ExperimentsList;
