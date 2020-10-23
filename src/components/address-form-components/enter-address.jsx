import React from 'react'

import CustomInput from '../custom-input-components/custom-input/custom-input';

import './enter-address.scss';

export default function EnterAddress({ handleChange, ...otherProps}) {
  return (
    <div className='enter-address'>
        <div className='descriptor'>Enter address manually</div>
        <CustomInput 
          name='addressLine1'
          value={otherProps.addressLine1}
          onChange={handleChange}
          placeholder="Address Line 1"
        />
        <CustomInput 
          name='addressLine2'
          value={otherProps.addressLine2}
          onChange={handleChange}
          placeholder='Address Line 2'
        />
        <CustomInput 
          name='postcode'
          value={otherProps.postcode}
          onChange={handleChange}
          placeholder='Postcode'
        />
        <CustomInput 
          name='city'
          value={otherProps.city}
          onChange={handleChange}
          placeholder='City'
        />
        <CustomInput 
          name='county'
          value={otherProps.county}
          onChange={handleChange}
          placeholder='County'
        />
      </div>
  )
}
