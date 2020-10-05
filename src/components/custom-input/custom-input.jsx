import React from 'react'
import './custom-input.scss'

function CustomInput({ handleChange, style, ...otherProps}) {
  return (
    <div className='form-input' style={style}>
      <input onChange={handleChange} {...otherProps} />
    </div>
  );
}

export default CustomInput;
