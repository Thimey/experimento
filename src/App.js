import React, {Component} from 'react';
import './App.css';
import AddExperiment from './experiment/components/AddExperiment';
import ExperimentsList from './experiment/components/ExperimentsList';
import {Link} from 'react-router';


class App extends Component {
    render() {
        return (
            <div>
                <div className="text-center">
                    <h1 >DoOLeS Experiment App</h1>
                    <p><i>component experiment design</i></p>
                </div>
                <div className="col-md-offset-4 col-md-4 text-center">
                    <Link to={`/variable-pool`}>
                        <button>Variable Pool</button>
                    </Link>
                    <br/>
                    <AddExperiment/>
                    <ExperimentsList/>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;
