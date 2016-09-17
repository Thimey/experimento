import React from 'react';
import {Link} from 'react-router';

const ExperimentListItem = ({name, id}) => (
    <Link to={`/experiment/${id}`}>
        <li className="list-group-item">
            {name}
        </li>
    </Link>
)

export default ExperimentListItem;
