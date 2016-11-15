import React from 'react';
import VariablePoolForm from '../../variable-pool/components/VariablePoolForm';
import SimonForm from '../../simon-form/SimonForm';
import FormInput from '../../form-inputs/FormInput';
import FormRadioGroup from '../../form-inputs/FormRadioGroup';

const VariablePool = () => (
    <div>
        {/*<VariablePoolForm/>*/}
        <SimonForm>
            <FormRadioGroup
                options={['variable', 'category']}
                stateKey="whatToCreate"
                type="radio-group"
            />
            <FormInput type="text" placeholder="variable name" name="variableName"/>
            <FormInput type="text" placeholder="variable unit" name="variableUnit"/>
        </SimonForm>
    </div>
);

export default VariablePool;
