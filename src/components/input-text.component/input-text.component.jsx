import React from 'react'

const TextInput = ({ handleChange, label, ...otherProps }) => (
    <div className='input-text'>
      <input className='input-text__input' onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } input-text__label`}
        >
          {label}
        </label>
      ) : null}
      {
        otherProps.required ?
        <div className="input-text-required-icon">*</div>
        :null 
      }
    </div>
  );
  
  export default TextInput;