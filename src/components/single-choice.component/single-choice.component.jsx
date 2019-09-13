import React from 'react'

export const SingleChoice = ({name, list, selectedOption,handleChange}) =>{
    return(
        <div className = {name}>
            {list.map((item, index)=>(
                <span>
                    <input 
                        key={index} 
                        type='radio' 
                        name={name} 
                        value={item} 
                        checked={item===selectedOption}
                        onChange={handleChange}
                    />
                    {item}
                </span>
            ))}
            <h3>this.state.selectedOption: {selectedOption}</h3>
        </div>
    )

}
