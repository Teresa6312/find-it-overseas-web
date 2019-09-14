import React from 'react'
import classNames from 'classnames'
import './input-search.style.scss'

export const SearchInput = ({name, className, placeholder, handleChange}) =>{
    const inputClassNames = classNames("search__input", className)
    return(
            <input 
                type="search" 
                id={name}
                name = {name}
                className={inputClassNames}
                placeholder={placeholder}
                onChange={handleChange}/>
    )
}