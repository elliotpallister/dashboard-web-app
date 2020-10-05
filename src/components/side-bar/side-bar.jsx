import React from 'react'

import AccountBoxIcon from '@material-ui/icons/AccountBox';
import BarChartIcon from '@material-ui/icons/BarChart';
import BuildIcon from '@material-ui/icons/Build';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';

import './side-bar.scss';

function SideBar() {
  return (
    <div className='side-bar-inner'>
      <div className='account'>
        <AccountBoxIcon className='icon' /> 
        <div className='text'> Hello, Elliot </div>
      </div>
      <div className='selector'>
        <div className='option selected'>
          <BarChartIcon className='icon' /> 
          <div className='text'> Dashboard </div>
        </div>
        <div className='option'>
          <BuildIcon className='icon' /> 
          <div className='text'> Account Settings </div>
        </div>
        <div className='option'>
          <MeetingRoomIcon className='icon' /> 
          <div className='text'> Sign Out </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar;