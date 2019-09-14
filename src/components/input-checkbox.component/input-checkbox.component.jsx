import React from 'react'
import classNames from 'classnames'
import './input-checkbox.style.scss'


export const CheckBoxInput = ({id, name, addClassName, isChecked, handleChange, labelText}) =>{
    const divClassNames = classNames("checkbox-block", addClassName)
    const inputClassNames = classNames("checkbox-block__input", addClassName + "-checkbox__input")
    const labelClassNames = classNames("checkbox-block__label", addClassName + "__label")
    return(
        <div className={divClassNames}>
        <input type="checkbox" 
            id = {id}
            name = {name}
            className={inputClassNames} 
            checked={isChecked}
            onChange={handleChange}/>
        <label htmlFor={name} className={labelClassNames}>{labelText}</label>
    </div>
    )
}