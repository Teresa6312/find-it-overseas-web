import React from 'react'
import classNames from 'classnames'


export const CheckBox = ({name, addClassName, isChecked, handleChange, labelText}) =>{
    const divClasses = classNames("checkbox-block", addClassName)
    const inputClassName = addClassName + "-checkbox__input"
    const labelClassName = addClassName + "-label"
    return(
        <div className={divClasses}>
        <input type="checkbox" 
            id = {name}
            name = {name}
            className={inputClassName} 
            checked={isChecked}
            onChange={handleChange}/>
        <label htmlFor={name} className={labelClassName}>{labelText}</label>
    </div>
    )
}