import React from 'react';
import {Link} from 'react-router';
import './nav-side.css';

export default () => (
    <div className="nav-side">
        <div><Link to={'/'}>Experiments</Link></div>
        <Link to={'/variable-pool'}>Variable Pool</Link>
        <Link to={'/Components'}>Components</Link>
    </div>
);
