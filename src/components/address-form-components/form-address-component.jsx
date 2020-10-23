import React from 'react'
import EnterAddress from './enter-address'
import SearchAddress from './search-address'

import './form-address-component.scss';

export default function FormAddressComponent() {
  return (
    <div className='address__component'>
      <div className='search__address'>
        <SearchAddress />
      </div>
      <div className='enter__address'>
        <EnterAddress />
      </div>
    </div>
  )
}
