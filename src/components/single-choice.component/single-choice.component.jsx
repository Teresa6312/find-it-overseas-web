import React from 'react'
import PropTypes from 'prop-types';

import RadioInput from '../input-radio.component/input-radio.component'

const SingleChoice = ({list, name, addClassName, value,handleChange, labelText, ...otherProps}) =>(
    <div className = {`single-choice-block ${addClassName?addClassName:name}`}>
        {
            otherProps.required ?
            <div className="single-choice-block-required-icon">*</div>
            :null 
        }
        {
            labelText?
            <label
                htmlFor={name} 
                className={`single-choice-block__label ${addClassName?addClassName:name}__label`}
                >
                {labelText}
            </label>
            :null
        }
        {list.map((option, index)=>(
            <RadioInput
                key={index}
                id={`${name}_${index}`}
                name={name}
                addClassName={`single-choice-block__radio_input ${addClassName}__radio_input`}
                value={option[0]}
                labelText={option[1]}
                checked={option[0]===value}
                onChange = {handleChange}/>
        ))}
    </div>
)

SingleChoice.propTypes = {
    name: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
};

export default SingleChoice;
