import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ id, name, addClassName, handleChange, labelText, ...otherProps }) => (
    <div className={`input-text-block ${addClassName?addClassName:name}`}>
        <input 
            id={id?id:`${name}_id`} 
            type='radio' 
            name={name} 
            className={`input-text-block__input  ${addClassName?addClassName:name}__input`}
            onChange={handleChange} 
            {...otherProps} />
        { 
            labelText ? 
            (
                <label
                  htmlFor={name} 
                  className={`${
                    otherProps.value.length ? 'shrink' : ''
                  } input-text-block__label  ${addClassName?addClassName:name}__input`}
                >
                  {labelText}
                </label>
            ) : null
        }
        {
            otherProps.required ?
            <div className="input-text-block-required-icon">*</div>
            :null 
        }
    </div>
);

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
};

export default TextInput;