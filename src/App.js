import React, {Component} from 'react';
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import './App.css';
import configureStore from './configureStore';
const store = configureStore();
import Home from './views/home/Home';
import Experiment from './views/experiment/Experiment';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path="/" component={Home}></Route>
                    <Route path="/experiment/:id" component={Experiment}></Route>
                </Router>
            </Provider>
        );
    }
}

export default App;
