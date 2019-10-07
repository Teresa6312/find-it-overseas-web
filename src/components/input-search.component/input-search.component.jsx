import React from 'react'
import PropTypes from 'prop-types';
import {MdSearch} from 'react-icons/md';

const SearchInput = ({id, name, labelText, addClassName, handleChange,...otherProps}) =>(
    <div className={`search-block ${addClassName?addClassName:name}`}>
        {
            labelText?
            <label
                htmlFor={name} 
                className={`search-block__label ${addClassName?addClassName:name}__label`}
                >
                {labelText}
            </label>
            :null
        }
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
};

export default SearchInput;