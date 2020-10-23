import React from 'react';

import './custom-select.scss';

function CustomSelect({ handleChange, options, ...otherProps}) {
  return (
    <div className='form-select'>
      <select {...otherProps} >
        {
          options.map((option, index) => {
            return <option key={index} value={option.toLowerCase()}>{option}</option>
          })
        }
      </select>
    </div>
  )
}

export default CustomSelect;