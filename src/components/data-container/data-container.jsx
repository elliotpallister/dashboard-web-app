import React from 'react';

// import ErrorIcon from '@material-ui/icons/Error';
import WarningIcon from '@material-ui/icons/Warning';

import './data-container.scss';

const DataContainer = props => {
  return(
    <div className={`container ${props.colour} ${props.size}`}>
      <div className='line'>
        {
         props.colour === 'amber' ? <WarningIcon fontSize='small' style={{color: '#00000080', marginLeft: '1rem'}}/> : null
        }
        <div className='number'>{props.number}</div>
      </div>
      <div className='text'>{props.text}</div>
    </div>
  );
}

export default DataContainer;