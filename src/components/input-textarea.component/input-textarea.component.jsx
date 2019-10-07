import React from 'react';
import PropTypes from 'prop-types';


const TextareaInput = ({ id, name, addClassName, value, shrink=false, handleChange, labelText, ...otherProps }) =>(
    <div className={`input-textarea-block ${addClassName?addClassName:name}`}>
        {
            otherProps.required ?
            <div className="input-textarea-block-required-icon">*</div>
            :null 
        }
        <label
            htmlFor={name} 
            className={`input-textarea-block__label  ${addClassName?addClassName:name}__label`}>
            {labelText?labelText:name}
        </label>

        <textarea 
            id={id?id:`${name}_id`}
            name={name} 
            className={`input-textarea-block__input  ${addClassName?addClassName:name}__input`}
            onChange={handleChange}
            value={value}
            {...otherProps} />
    </div>
);


TextareaInput.propTypes = {
    name: PropTypes.string.isRequired,
  };
  
  export default TextareaInput;