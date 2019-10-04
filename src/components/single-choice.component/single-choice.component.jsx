import React from 'react'
import PropTypes from 'prop-types';

import RadioInput from '../input-radio.component/input-radio.component'

const SingleChoice = ({list, name, addClassName, selectedOption,handleChange}) =>(
    <div className = {`single-choice-block ${addClassName?addClassName:name}`}>
        {list.map((option, index)=>(
            <RadioInput
                key={index}
                id={`${name}_${index}`}
                name={name}
                addClassName={`single-choice-block__radio_input ${addClassName}__radio_input`}
                value={option}
                selectedOption = {selectedOption}
                handleChange = {handleChange}/>
        ))}
    </div>
)

SingleChoice.propTypes = {
    name: PropTypes.string.isRequired,
};

export default SingleChoice;
