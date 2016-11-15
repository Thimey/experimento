import React, {Component} from 'react';
import FormInput from '../../form-inputs/FormInput';
import FormRadioGroup from '../../form-inputs/FormRadioGroup';

export default class VariablePoolForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            options: ['variable', 'category'],
            create: '',
            variableDetails: {
                name: '',
                unit: '',
                parentCategoryId: ''
            },
            categoryDetails: {
                name: '',
                parentCategoryId: ''
            }
        }
    }

    variableInputs = (variableDetails) => (
        <div>
            <FormInput type="text" placeholder="variable name" value={variableDetails.name}/>
            <FormInput type="text" placeholder="variable units" value={variableDetails.unit}/>
        </div>
    );

    categoryInputs = (categoryDetails) => (
        <div>
            <FormInput type="text" placeholder="category name" value={categoryDetails.name}/>
        </div>
    );

    render() {
        const {options, create, variableDetails, categoryDetails} = this.state;
        return (
            <form className="form-horizontal variable-pool-form">
                <h3>Create new node</h3>

                <FormRadioGroup
                    options={options}
                    create={create}
                    optionChange={e => this.setState({create: e.target.value})}
                />

                {create === 'variable' ? this.variableInputs(variableDetails) : null}
                {create === 'category' ? this.categoryInputs(categoryDetails) : null}

            </form>
        );
    }
}

