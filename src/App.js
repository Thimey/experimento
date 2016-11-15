import React, {Component} from 'react';
import './App.css';
import NavSide from './navs/nav-side/NavSide';

class App extends Component {
    render() {
        return (
            <div className={'app-container'}>
                <NavSide/>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;
