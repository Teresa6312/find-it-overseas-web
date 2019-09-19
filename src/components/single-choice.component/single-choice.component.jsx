import React from 'react'
import RadioInput from '../input-radio.component/input-radio.component'

const SingleChoice = ({list, name, selectedOption,handleChange}) =>{
    return(
        <div className = {`single-choice-block__div ${name}-block__div`} key={name}>
            {list.map((option, index)=>(
                <RadioInput 
                    key={index}
                    name={name}
                    index={index}
                    option={option}
                    selectedOption = {selectedOption}
                    handleChange = {handleChange}/>
            ))}
        </div>
    )

}

export default SingleChoice;
