import React from 'react'
import PropTypes from 'prop-types';

const RadioInput = ({id, name, addClassName, 
                        value, labelText, handleChange,
                        ...otherProps
                    }) =>{
    return(
        <div className={`radio-block ${addClassName?addClassName:name}`}>
            <input 
                id={id?id:`${name}_id`} 
                type='radio' 
                name={name} 
                className={`radio-block__input ${addClassName?addClassName:name}-radio__input`}
                value={value} 
                {...otherProps}
            />
            <label htmlFor={name} className={`radio-block__label ${addClassName?addClassName:name}-radio__label`}>
                {labelText}
            </label>
        </div>
    )
}

RadioInput.propTypes = {
    name: PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    labelText:PropTypes.string.isRequired,
};

export default RadioInput;


