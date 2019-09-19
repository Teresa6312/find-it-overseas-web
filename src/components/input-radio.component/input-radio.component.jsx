import React from 'react'

const RadioInput = (props) =>{
    return(
        <div key={props.index} className={`radio-block ${props.name}-radio__div`}>
            <input 
                key={props.index} 
                type='radio' 
                name={props.name} 
                className={`radio-block__input ${props.name}-radio__input`}
                value={props.option} 
                checked={props.option===props.selectedOption}
                onChange={props.handleChange}
            />
            <label htmlFor={props.name} className={`radio-block__label ${props.name}-radio__label`}>
                {props.option}
            </label>
        </div>
    )
}

export default RadioInput;


