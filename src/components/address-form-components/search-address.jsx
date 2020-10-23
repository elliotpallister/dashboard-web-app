import React from 'react';

import CustomInput from '../custom-input-components/custom-input/custom-input';
import SearchInput from '../custom-input-components/search-input/search-input';

import RoomIcon from '@material-ui/icons/Room';

import './search-address.scss';

const locations = [
  {
    symbol: 'error',
    locationId: '1',
    locationName: '53 Degrees',
    address: '116 Leeds Road, HG2 8HH, Harrogate, North Yorkshire, United Kingdom',
    status: '10 online'
  },
  {
    symbol: '',
    locationId: '2',
    locationName: 'Selfridges',
    address: '120 Duchy Road, HG1 2HE, Harrogate, North Yorkshire, United Kingdom',
    status: '5 online'
  },
  {
    symbol: '',
    locationId: '3',
    locationName: 'Essential Healthcare',
    address: 'Essential Healthcare UK, Essential Enterprise Villiage, WF17 9BN, Birstall, West Yorkshire, United Kingdom',
    status: '12 online'
  },
  {
    symbol: 'error',
    locationId: '1',
    locationName: '53 Degrees',
    address: '116 Leeds Road, HG2 8HH, Harrogate, North Yorkshire, United Kingdom',
    status: '10 online'
  },
  {
    symbol: '',
    locationId: '2',
    locationName: 'Selfridges',
    address: '120 Duchy Road, HG1 2HE, Harrogate, North Yorkshire, United Kingdom',
    status: '5 online'
  },
  {
    symbol: '',
    locationId: '3',
    locationName: 'Essential Healthcare',
    address: 'Essential Healthcare UK, Essential Enterprise Villiage, WF17 9BN, Birstall, West Yorkshire, United Kingdom',
    status: '12 online'
  },
  {
    symbol: 'error',
    locationId: '1',
    locationName: '53 Degrees',
    address: '116 Leeds Road, HG2 8HH, Harrogate, North Yorkshire, United Kingdom',
    status: '10 online'
  },
  {
    symbol: '',
    locationId: '2',
    locationName: 'Selfridges',
    address: '120 Duchy Road, HG1 2HE, Harrogate, North Yorkshire, United Kingdom',
    status: '5 online'
  },
  {
    symbol: '',
    locationId: '3',
    locationName: 'Essential Healthcare',
    address: 'Essential Healthcare UK, Essential Enterprise Villiage, WF17 9BN, Birstall, West Yorkshire, United Kingdom',
    status: '12 online'
  },
]

export default function SearchAddress({ handleChange, handleClick, selectLocation, ...otherProps}) {
  return (
    <div className='search-address'>
      <div className='descriptor'>Search for address</div>
        <CustomInput 
          name='addressLineSearch'
          value={otherProps.addressLineSearch}
          onChange={handleChange}
          placeholder='Address Line 1 (optional)'
          style={{ gridColumn: 'span 2'}}
        />
        <SearchInput
          name='postcodeSearch'
          value={otherProps.postcodeSearch}
          onChange={handleChange}
          placeholder='Postcode'
        />
        <button onClick={handleClick}> Look up address </button>
        <div className='options'>
          {locations.map((location, index) => {
            return(
              <div className='suggested-location' key={index} onClick={() => selectLocation(index)} >
                <RoomIcon className='icon'/>
                <div className='text'> {location.address} </div>
              </div>
            );
            })
          }
      </div>
    </div>
  )
}
