import React from 'react'
import PropTypes from 'prop-types';
import {MdSearch} from 'react-icons/md';

const SearchInput = ({id, name, addClassName, handleChange,...otherProps}) =>(
    <div className={`search-block ${addClassName?addClassName:name}`}>
        <input 
            type="search" 
            id={id?id:`${name}_id`}
            name = {name}
            className={`search-block__input ${addClassName?addClassName:name}__input`}
            onChange={handleChange}
            {...otherProps}
            />
        <div className={`search-block__icon ${addClassName?addClassName:name}__icon`}>
            <MdSearch/>
        </div>
    </div>

)


SearchInput.propTypes = {
    name: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default SearchInput;