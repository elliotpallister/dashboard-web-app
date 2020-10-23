import React, { Component } from 'react';

import FormAddressComponent from '../../components/address-form-components/form-address-component';
import CustomInput from '../../components/custom-input-components/custom-input/custom-input';

import './add-location.scss';

class AddLocation extends Component {
  render() {
    return (
      <div className='add__location'>
        <div className='inner'>
          <div className='title'>Enter Location Details</div>
          <form className='location__details'>
            <div className='location__title'>
              <div className='descriptor'>Enter the name of your location</div>
              <CustomInput 
                name='locationName'
                placeholder='Location Name'
              />
            </div>
            <FormAddressComponent />
            <div className='footer'>
              <button className='button' type='submit'> Continue </button>
              <div> 1 / 2 </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default AddLocation;