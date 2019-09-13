import React from 'react'

export const SearchBox = ({name, className, placeholder, handleChange}) =>{
    return(
            <input 
                type="search" 
                id={name}
                name = {name}
                className={className}
                placeholder={placeholder}
                onChange={handleChange}/>
    )
}