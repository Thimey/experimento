import React, {Component} from 'react';

export default class SimonForm extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        props.children.map(child => {
            console.log('child', child.props);
            if (child.props.type.indexOf('radio') > -1) {
                this.state[child.props.stateKey] = child.props.options[0];
            }
        });
        console.log('constructor state', this.state);
    }

    setFormState = (obj) => {
        this.setState(obj);
    };

    render() {
        console.log('render state', this.state);
        return (
            <form>
                {
                    this.props.children.map(child => {
                        if (child.props.type.indexOf('radio') > -1) {
                            return React.cloneElement(
                                child,
                                {setFormState: this.setFormState, value: this.state[child.props.stateKey]}
                            );
                        } else {
                            return React.cloneElement(child, {setFormState: this.setFormState});
                        }
                    })
                }
            </form>
        )
    }
}
