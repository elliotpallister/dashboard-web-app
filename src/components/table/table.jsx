import  React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import SearchInput from '../custom-input-components/search-input/search-input';
import AddIcon from '@material-ui/icons/Add';
import WarningIcon from '@material-ui/icons/Warning';

import './table.scss';

class Table extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchfield: '',
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
      let valuesToCheck = Object.values(item).splice(0, 3);
      for (let i=0; i< valuesToCheck.length; i++){
        if (valuesToCheck[i].toLowerCase().includes(this.state.searchfield.toLowerCase())) {
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
      return(
        <tr className={`row ${row[0]}`} key={index}>
          {row.map((item, index) => {
            return (
             item === 'error' ? <td key={index}> <WarningIcon fontSize='small' /> </td>: <td key={index}>{item}</td>
            );
          })}
        </tr>
      )
    })
  }


  render() {
    return(
      <div className='table'>
        <div className='top'>
          <div className='title'>{this.props.title}</div>
          <SearchInput 
            name='searchfield'
            value={this.state.searchfield}
            placeholder='Search Locations'
            onChange={this.handleChange}
            style={{ marginLeft: '3rem' }}
          />
          <Link to='/dashboard/addlocation' delay={150} > 
            <AddIcon className='icon' />
            { this.props.title === 'Locations' ? 'Add Location' : 'Add Unit'} 
          </Link>
        </div>
        <table>
          <thead>
           {this.renderTableHeaders(this.props.headers)}
          </thead>
          <tbody>
            {this.renderTableData(this.props.data)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default withRouter(Table);