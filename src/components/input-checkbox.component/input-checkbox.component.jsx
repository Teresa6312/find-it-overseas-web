import React from 'react';
import PropTypes from 'prop-types';

const CheckBoxInput = ({id, name, addClassName, 
                            isChecked=false, handleChange, 
                            labelText, value, selectedOption,
                            ...otherProps
                        }) =>{
    return(
        <div key={id?id:`${name}_key`} className={`checkbox-block ${addClassName}`}>
            <input type="checkbox" 
                id = {id?id:`${name}_id`}
                name = {name}
                className={`checkbox-block__input ${addClassName?addClassName:name}-checkbox__input`} 
                value={value} 
                checked={selectedOption?selectedOption===value:isChecked}
                onChange={handleChange}
                {...otherProps}
            />
            <label htmlFor={name} className={`checkbox-block__label ${addClassName}__label`}>
                {labelText?labelText:name}
            </label>
        </div>
    )
}


CheckBoxInput.propTypes = {
    name: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default CheckBoxInput;