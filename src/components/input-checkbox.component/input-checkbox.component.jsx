import React from 'react'

const CheckBoxInput = ({id, name, addClassName, isChecked, handleChange, labelText}) =>{
    return(
        <div className={`checkbox-block ${addClassName}`}>
        <input type="checkbox" 
            id = {id}
            name = {name}
            className={`checkbox-block__input ${addClassName}-checkbox__input`} 
            checked={isChecked}
            onChange={handleChange}/>
        <label htmlFor={name} className={`checkbox-block__label ${addClassName}__label`}>{labelText}</label>
    </div>
    )
}

export default CheckBoxInput;