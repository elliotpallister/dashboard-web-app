import React, { Component } from 'react';

import Table from '../../components/table/table';
import SideBar from '../../components/side-bar/side-bar';
// import DataContainer from '../../components/data-container/data-container';

import './dashboard.scss';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locations: [
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
      ],
      selectedLocation: null,
    }
  }

  render () {
    return(
      <div className='dashboard'>
        <div className='side-bar'>
          <SideBar name={this.props.name} />
        </div>
        <div className='content-dashboard-outer'>
          <div className='content-dashboard-inner'>
            <div className='overview-container'>
            {/*   <DataContainer
                colour='blue'
                number={this.state.locations.length}
                text='Locations'
              />
              <DataContainer
                colour='blue'
                number={45}
                text='Units'
              /> */}
            </div>
            <div className='table-container'>
              <Table 
                title='Locations'
                data={this.state.locations.map(location => Object.values(location).splice(0, 5))}
                headers={[ '','ID', 'LOCATION NAME', 'ADDRESS', 'STATUS']}
              />
            </div>
          </div> 
        </div>
      </div>
    );
  }
}

export default Dashboard;