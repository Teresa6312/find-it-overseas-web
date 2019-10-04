import React from 'react';
import PropTypes from 'prop-types';

const CheckBoxInput = ({id, name, addClassName, 
                            isChecked=false, handleChange, 
                            labelText, value, selectedOption,
                            ...otherProps
                        }) =>{
    return(
        <div className={`checkbox-block ${addClassName?addClassName:name}`}>
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
};

export default CheckBoxInput;