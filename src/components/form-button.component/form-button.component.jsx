import React from 'react';


const FormButton = ({ children, addClassName, ...otherProps }) => {
  return (
    <button className={`form__button ${addClassName}`} {...otherProps}>
      {children}
    </button>
  )
};

export default FormButton;