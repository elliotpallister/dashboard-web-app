import React from 'react'

import CustomInput from '../custom-input/custom-input';
import SearchInput from '../search-input/search-input';
import RoomIcon from '@material-ui/icons/Room';

import './address-form.scss';

function AddressForm({ handleChange, lookUpAddress, selectAddress, otherProps}) {
  return (
    <div className='section location'>
    <div className='address-location'>
      <div className='text'> Give your location a name </div>
      <CustomInput
        type='text'
        name='locationName'
        value={otherProps.locationName}
        onChange={handleChange}
        required
        placeholder='Location Name'
        style={{
          marginTop: '0.7rem',
        }}
      />
      <div className='search-container'>
        <div className='text'> Search for an address </div>
        <CustomInput 
          type='text'
          name='streetAddressSearch'
          value={otherProps.streetAddressSearch}
          onChange={handleChange}
          required
          placeholder='Street Address 1 (optional)'
          style={{ gridColumn: 'span 2'}}
        />
        <SearchInput 
          type='text' 
          name='postcodeSearch'
          value={otherProps.postcodeSearch}  
          onChange={handleChange}
          required
          placeholder="Enter Postcode"
        />

        <button onClick={lookUpAddress}> Look up address </button>
      </div>
      <div className={`suggested-locations ${otherProps.showLocations ? 'display' : ''}`}>
        {otherProps.suggestedLocations.length > 0 ? otherProps.suggestedLocations.map((location, index) => {
          return(
            <div className='suggested-location' key={index} onClick={() => selectAddress(location)}>
              <RoomIcon className='location-icon' fontSize='small' style={{ color: '#CA5441'}}/>
              <div className='line-1'>{location.streetAddress1.concat(location.streetAddress2)}</div>
              <div className='line-2'>{`${location.postcode}, ${location.city}, ${location.county}, ${location.country}`}</div>
            </div>
          );
        })  : <div className='no-match'>No results match your search</div>
      }
      </div>
      <div className='address-container'>
        <div className='text'> Enter address manually</div>
        <CustomInput 
          type='text'
          name='streetAddress1'
          value={otherProps.streetAddress1}
          onChange={handleChange}
          required
          placeholder='Street Address 1'
        />
        <CustomInput 
          type='text'
          name='streetAddress2'
          value={otherProps.streetAddress2}
          onChange={handleChange}
          placeholder='Street Address 2'
        />
        <CustomInput 
          type='text'
          name='postcode'
          value={otherProps.postcode}
          onChange={handleChange}
          required
          placeholder='Postcode'
          style={{
            gridColumn: 'span 1'
          }}
        />
        <CustomInput 
          type='text'
          name='city'
          value={otherProps.city}
          onChange={handleChange}
          required
          placeholder='City'
          style={{
            gridColumn: 'span 1'
          }}
        />
        <CustomInput 
          type='text'
          name='county'
          value={otherProps.county}
          onChange={handleChange}
          required
          placeholder='County/State'
        />
        <CustomInput 
          type='text'
          name='country'
          value={otherProps.country}
          onChange={handleChange}
          required
          placeholder='Country'
        />
      </div>
    </div>
  </div>
  )
}

export default AddressForm;
