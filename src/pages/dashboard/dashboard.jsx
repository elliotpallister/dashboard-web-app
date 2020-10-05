import React, { Component } from 'react';

import Table from '../../components/table/table';
import SideBar from '../../components/side-bar/side-bar';

import './dashboard.scss';

const LOCATION_HEADERS = ['ID', 'LOCATION NAME', 'ADDRESS', 'STATUS']
// const UNIT_HEADERS = ['SERIAL #', 'LOCATION', 'MODEL TYPE', 'CAPACITY', 'STATUS']


class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locations: [
        {
          id: '1',
          locationName: '53 Degrees',
          address: '116 Leeds Road, HG2 8HH, Harrogate, North Yorkshire, United Kingdom',
          status: '1 online'
        },
        {
          id: '2',
          locationName: 'Selfridges',
          address: '120C Duchy Road, HG1 2HE, Harrogate, North Yorkshire, United Kingdom',
          status: '1 online'
        }
      ]
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
            <Table 
              title='Locations'
              data={this.state.locations}
              headers={LOCATION_HEADERS}
            />
          </div>
          <div className='container-2'></div>
          <div className='container-2'></div>
        </div> 
      </div>
    );
  }
}

export default Dashboard;