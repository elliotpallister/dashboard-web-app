import React, { Component } from 'react';

import Table from '../../components/table/table';
import SideBar from '../../components/side-bar/side-bar';

import './dashboard.scss';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locations: [],
    }
  }

  render () {
    return(
      <div className='dashboard'>
        <div className='side-bar'>
          <SideBar />
        </div>
        <div className='content'>
          <div className='container-1'>
            <Table />
          </div>
          <div className='container-2'></div>
          <div className='container-2'></div>
        </div> 
      </div>
    );
  }
}

export default Dashboard;