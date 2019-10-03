import React from 'react'
import PropTypes from 'prop-types';

const SearchInput = ({id, name, addClassName, handleChange,...otherProps}) =>{
    return(
            <input 
                type="search" 
                id={id?id:`${name}_id`}
                name = {name}
                className={`search__input ${addClassName?addClassName:name}`}
                onChange={handleChange}
                {...otherProps}
                />
    )
}

SearchInput.propTypes = {
    name: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default SearchInput;