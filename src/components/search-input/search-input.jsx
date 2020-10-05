import React from 'react'

import SearchIcon from '@material-ui/icons/Search';

import './search-input.scss'

const SearchInput = ({ handleChange, style, ...otherProps}) => {
  return (
    <div className='search-input' style={style} >
      <SearchIcon className='search-icon'/>
      <input 
        onChange={handleChange}
        {...otherProps}
      />
    </div>
  )
}

export default SearchInput;