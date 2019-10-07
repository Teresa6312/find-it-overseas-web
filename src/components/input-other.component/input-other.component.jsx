import React from 'react';
import PropTypes from 'prop-types';

const OtherInput = ({ id, name, addClassName, shrink=false, handleChange, labelText, ...otherProps }) => (
    <div className={`input-text-block ${addClassName?addClassName:name}`}>
        <input 
            id={id?id:`${name}_id`} 
            name={name} 
            className={`input-text-block__input  ${addClassName?addClassName:name}__input`}
            onChange={handleChange} 
            {...otherProps} />
          <label
            htmlFor={name} 
            className={`${
              shrink&&otherProps.value.length ? 'shrink' : ''
            } input-text-block__label  ${addClassName?addClassName:name}__label`}
          >
            {labelText?labelText:name}
          </label>
        {
            otherProps.required ?
            <div className="input-text-block-required-icon">*</div>
            :null 
        }
    </div>
);

OtherInput.propTypes = {
  name: PropTypes.string.isRequired,
};

export default OtherInput;