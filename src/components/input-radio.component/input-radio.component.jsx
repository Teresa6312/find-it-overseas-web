import React from 'react'
import classNames from 'classnames' 
import './input-radio.style.scss'

export const RadioInput = (props) =>{
    const divClassNames = classNames("radio-block", props.name + "-radio__div");
    const inputClassNames = classNames("radio-block__input", props.name + "-radio__input");
    const labelClassNames = classNames("radio-block__label",  props.name + "radio__label");
    return(
        <div key={props.index} className={divClassNames}>
            <input 
                key={props.index} 
                type='radio' 
                name={props.name} 
                className={inputClassNames}
                value={props.item} 
                checked={props.item===props.selectedOption}
                onChange={props.handleChange}
            />
            <label htmlFor={props.name} className={labelClassNames}>
                {props.item}
            </label>
        </div>
    )
}


