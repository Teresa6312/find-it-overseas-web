import React from 'react'
import PropTypes from 'prop-types';

const RadioInput = ({id, name, addClassName, 
                        value, labelText, handleChange,
                        isChecked=false, selectedOption, ...otherProps
                    }) =>{
    return(
        <div className={`radio-block ${addClassName?addClassName:name}`}>
            <input 
                id={id?id:`${name}_id`} 
                type='radio' 
                name={name} 
                className={`radio-block__input ${addClassName?addClassName:name}-radio__input`}
                value={value} 
                checked={selectedOption?value===selectedOption:isChecked}
                onChange={handleChange}
                {...otherProps}
            />
            <label htmlFor={name} className={`radio-block__label ${addClassName?addClassName:name}-radio__label`}>
                {labelText?labelText:value}
            </label>
        </div>
    )
}

RadioInput.propTypes = {
    name: PropTypes.string.isRequired,
};

export default RadioInput;


