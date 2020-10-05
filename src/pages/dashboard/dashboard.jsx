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
      locations: []
    }
  }

  componentDidMount() {
    console.log(this.state)
    fetch('http://localhost:3000/dashboard', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        currentUser: this.props.currentUser,
      })
    }).then(response => response.json())
      .then(data => this.setState({ locations: data}, () => console.log(this.state)))
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