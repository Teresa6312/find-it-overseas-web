import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ id, name, addClassName, shrink=false, handleChange, labelText, ...otherProps }) => (
    <div className={`input-text-block ${addClassName?addClassName:name}`}>
        <label
          htmlFor={name} 
          className={`${
            shrink&&otherProps.value.length ? 'shrink' : ''
          } ${shrink?"input-text-block-shirnk__label":"input-text-block__label"} ${addClassName?addClassName:name}__label`}
          >
          {labelText?labelText:name}
        </label>

        {
          otherProps.required ?
          <div className="input-text-block-required-icon">*</div>
          :null 
        }

        <input 
            id={id?id:`${name}_id`}
            name={name} 
            className={`input-text-block__input  ${addClassName?addClassName:name}__input`}
            onChange={handleChange} 
            {...otherProps} />

    </div>
);

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
};

export default TextInput;