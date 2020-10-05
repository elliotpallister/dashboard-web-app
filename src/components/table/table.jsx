import  React, { Component } from 'react'

import SearchInput from '../search-input/search-input';

import './table.scss';

const LOCATION_HEADERS = ['ID', 'LOCATION NAME', 'ADDRESS', 'STATUS']

class Table extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchfield: '',
      locations: [
        {
          id: '1',
          locationName: '53 Degrees',
          address: '116 Leeds Road',
          status: '1 online'
        },
        {
          id: '2',
          locationName: 'Selfridges',
          address: '336 Leeds Road',
          status: '1 online'
        }
      ]
    }
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value })
  }

  renderTableHeaders = headers => {
    return( 
      <tr className='headers'>
        { headers.map((header, index) => <th key={index}> {header} </th>) }
      </tr>)
  }

  filterData = data => {
    const filteredData = data.filter(item => {
      let returnItem = false;
      const rowValues = Object.values(item);
      rowValues.pop()
      for (let i=0; i< rowValues.length; i++){
        if (rowValues[i].toLowerCase().includes(this.state.searchfield.toLowerCase())) {
          returnItem = true;
        }
      }

      return returnItem;
    })

    return filteredData;
  }

  renderTableData = data => {
    const filteredData = this.filterData(data)
    return filteredData.map((row, index) => {
      const { id, locationName, address, status } = row;
      return(
        <tr className='row' key={index}>
          <td>{id}</td>
          <td>{locationName}</td>
          <td>{address}</td>
          <td>{status}</td>
        </tr>
      )
    })
  }

  render() {
    return(
      <div className='table'>
        <div className='top'>
          <div className='title'>Locations</div>
          <SearchInput 
            name='searchfield'
            value={this.state.searchfield}
            placeholder='Search Locations'
            onChange={this.handleChange}
            style={{ marginLeft: '3rem' }}
          />
        </div>
        <table>
          <thead>
           {this.renderTableHeaders(LOCATION_HEADERS)}
          </thead>
          <tbody>
            {this.renderTableData(this.state.locations)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;