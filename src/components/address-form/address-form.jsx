import React from 'react';

import CustomInput from '../custom-input/custom-input';
import SearchInput from '../search-input/search-input';

import RoomIcon from '@material-ui/icons/Room';

import './address-form.scss';

export default function AddressForm({ handleChange, handleClick, selectLocation, locations, ...otherProps}) {
  return (
    <div className='address-form'>
      <div className='search-address'>
        <CustomInput 
          name='addressLineSearch'
          value={otherProps.addressLineSearch}
          onChange={handleChange}
        />
        <SearchInput
          name='postcodeSearch'
          value={otherProps.postcodeSearch}
          onChange={handleChange}
        />
        <button onClick={handleClick}> Look up address </button>
        <div className='options'>
          {locations.map((location, index) => {
             return(
              <div className='suggested-location' key={index} onClick={() => selectLocation(index)} >
                <RoomIcon fontSize='small' />
                <div className='text'> {location} </div>
              </div>
             );
            })
          }
        </div>
      </div>
      <div className='enter-address'>
        <CustomInput 
          name='addressLine1'
          value={otherProps.addressLine1}
          onChange={handleChange}
        />
        <CustomInput 
          name='addressLine2'
          value={otherProps.addressLine2}
          onChange={handleChange}
        />
        <CustomInput 
          name='postcode'
          value={otherProps.postcode}
          onChange={handleChange}
        />
        <CustomInput 
          name='city'
          value={otherProps.city}
          onChange={handleChange}
        />
        <CustomInput 
          name='county'
          value={otherProps.county}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}
