import React from 'react'

import CustomInput from '../custom-input/custom-input';
import CustomSelect from '../custom-select/custom-select';

import ClearIcon from '@material-ui/icons/Clear';

import './add-units-form.scss'

function AddUnitsForm({handleChange, addUnit, otherProps}) {
  return (
    <div className='section units'>
    <div className='input-units'> 
      <div className='text'> Add units </div>
      <CustomInput 
        type='text'
        name='serialNo'
        value={otherProps.serialNo}
        onChange={handleChange}
        required
        placeholder='Serial #'
        style={{
          gridColumn: 'span 1'
        }}
      />
      <CustomInput 
        type='text'
        name='locationDescription'
        value={otherProps.locationDescription}
        onChange={handleChange}
        required
        placeholder='Location description'
        style={{
          gridColumn: 'span 1'
        }}
      />
      <CustomSelect 
        name='capacity'
        value={otherProps.capacity}
        onChange={handleChange}
        required
        options={['0.5l', '1l', '1.5l']}
      />

      <button onClick={addUnit}> Add unit </button>
    </div>
    <div className='display-units'>
      <div className='headers'>
        <div className='header'>Serial #</div>
        <div className='header'>Location description</div>
        <div className='header'>Capacity</div>
      </div>
      {
        otherProps.units.map((unit, index) => {
          return(
            <div className='unit' key={index} >
              <div className='text'>{unit.serialNo}</div>
              <div className='text'>{unit.locationDescription}</div>
              <div className='text'>{unit.capacity}</div>
              <ClearIcon className='clear-icon' fontSize='small' />
            </div>
          );
        })
      }
    </div>
  </div> 
  )
}

export default AddUnitsForm