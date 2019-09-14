import React from 'react'
import { RadioInput } from '../input-radio.component/input-radio.component'
import classNames from 'classnames'

export const SingleChoice = ({name, list, selectedOption,handleChange}) =>{
    const divClassNames= classNames('single-choice-block__div',name+"-block__div");
    return(
        <div className = {divClassNames} key={name}>
            {list.map((item, index)=>(
                <RadioInput 
                    key={index}
                    name={name}
                    index={index}
                    item={item}
                    selectedOption = {selectedOption}
                    handleChange = {handleChange}/>
            ))}
        </div>
    )

}


