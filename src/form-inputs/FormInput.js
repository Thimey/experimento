import React, {PropTypes} from 'react';

const FormInput = ({type, placeholder, name, setFormState}) => (
    <input
        key={name}
        type={type}
        className="form-control"
        placeholder={placeholder}
        onChange={(e) => setFormState({[name]: e.target.value})}
    />
);

FormInput.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    setFormState: PropTypes.func.isRequired
};

export default FormInput;
