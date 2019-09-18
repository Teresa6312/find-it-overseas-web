import React from 'react'

export const SearchInput = ({name, className, placeholder, handleChange}) =>{
    return(
            <input 
                type="search" 
                id={name}
                name = {name}
                className={`search__input ${className}`}
                placeholder={placeholder}
                onChange={handleChange}/>
    )
}