import React, {PropTypes} from 'react';

const FormRadioGroup = ({options, value, stateKey, setFormState}) => {

    return (
        <div className="radio">
            {options.map((option) => {
                return (
                    <label className="radio-inline">
                        <input
                            key={option}
                            type="radio"
                            value={option}
                            checked={option == value}
                            onChange={(e) => {
                                console.log('radio button val', e.target.value);
                                setFormState({[stateKey]: e.target.value})
                            }
                            }
                        />
                        <span>{option}</span>
                    </label>
                )
            })}
        </div>
    );
};

FormRadioGroup.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    optionChange: PropTypes.func.isRequired
};

export default FormRadioGroup;
