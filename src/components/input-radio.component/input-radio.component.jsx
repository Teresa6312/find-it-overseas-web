import React from 'react'
import PropTypes from 'prop-types';

const RadioInput = ({id, name, addClassName, 
                        value, labelText, handleChange,
                        isChecked=false, selectedOption, ...otherProps
                    }) =>{
    return(
        <div key={id?id:`${name}_key`} className={`radio-block ${name}-radio__div`}>
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
            <label htmlFor={name} className={`radio-block__label ${name}-radio__label`}>
                {labelText?labelText:value}
            </label>
        </div>
    )
}

RadioInput.propTypes = {
    name: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default RadioInput;


