import React from 'react';
import {connect} from 'react-redux';
import ExperimentListItem from './ExperimentListItem';
let ExperimentsList = ({experiments}) => (
    <ul className="list-group">
        {experiments.map(experiment =>
            <ExperimentListItem key={experiment.id} {...experiment}/>
        )}
    </ul>
);

const mapStateToProps = (state) => (
    {experiments: state.experiments}
);


ExperimentsList = connect(mapStateToProps, null)(ExperimentsList);
export default ExperimentsList;
