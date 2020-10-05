import React, { Component } from 'react';

import { withRouter, Link } from 'react-router-dom';

import AddUnitsForm from '../../components/add-units-form/add-units-form';
import AddressForm from '../../components/address-form/address-form';
import CloseIcon from '@material-ui/icons/Close';

import './add-location.scss';

const POSTCODE_APIKEY = 'ak_kficvdrs8WtR98GySo8e5e72p4afz';

class AddLocation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      streetAddressSearch: '',
      postcodeSearch: '',
      locationName: '',
      streetAddress1: '',
      streetAddress2: '',
      postcode: '',
      city: '',
      county: '',
      country: '',
      lat: '',
      lng: '',
      showLocations: false,
      suggestedLocations: [],
      serialNo: '',
      locationDescription: '',
      capacity: '0.5l',
      units: [],
      locationConfirmed: false,
      error: [],
    }
  }

  handleChange = event => {
    const { name, value } = event.target;

    name === 'postcodeSearch' || name === 'postcode' ? 
      this.setState({ [name]: value.toUpperCase()}) 
      : this.setState({ [name]: value })
  
  };

  lookUpAddress = event => {
    event.preventDefault();

    if (this.state.suggestedLocations.length === 0 && (this.state.postcodeSearch.length >= 5 && this.state.postcodeSearch.length <= 8)) {
      fetch(`https://api.ideal-postcodes.co.uk/v1/postcodes/${this.state.postcodeSearch.replace(' ', '')}?api_key=${POSTCODE_APIKEY}`)
      .then(response => response.json())
      .then(data => {
        if (data.code === 2000) {
          let locations = data.result.map(location => {
            return({
              streetAddress1: location.line_1,
              streetAddress2: `, ${location.line_2}`,
              postcode: location.postcode,
              city: location.district,
              county: location.administrative_county,
              country: 'United Kingdom',
              lat: location.latitude,
              lng: location.longitude
            });
          })
    
          return locations;
        } else {

          this.setState({ error: [
            ...this.state.error,
            'invalid-postcode'
          ]});

          return [];
        }
      }).then(locations => this.setState({suggestedLocations: locations}));
  
        this.setState({ showLocations: true})
    } else if (this.state.suggestedLocations.length > 0 ) {
      this.setState({  showLocations: true })
    } else {
      this.setState({ error: [
        ...this.state.error,
        'postcodeSearch'
      ] })
    }
  }

  selectAddress = location => {
    console.log(location)

    this.setState({
      streetAddress1: location.streetAddress1,
      streetAddress2: location.streetAddress2.length > 0 ? `${location.streetAddress2.replace(', ', '')}` : '',
      postcode: location.postcode,
      city: location.city,
      county: location.county,
      country: location.country,
      lat: location.lat,
      lng: location.lng,
      showLocations: false,
      locationConfirmed: true,
      
    }, () => console.log(this.state))
  }

  addUnit = event => {
    event.preventDefault();

    const unit = {
      serialNo: this.state.serialNo,
      locationDescription: this.state.locationDescription,
      capacity: this.state.capacity
    }

    this.setState({
      units: [
        ...this.state.units,
        unit
      ]
    }, () => console.log(this.state.units));
  }

  checkLength = keys => {
    let correctLength = true;
    let invalidValues = [];

    for (let i=0; i < keys.length; i++) {
      if (this.state[keys[i]].length < 1) {
        correctLength = false
        invalidValues = [
          ...invalidValues,
          keys[i]
        ]
      }
    }

    return [correctLength, invalidValues];
  }

  checkLocation = () => {
    const lengthsValid = this.checkLength(['streetAddress1', 'postcode', 'city', 'county', 'country'])[0];
    const invalidValues = this.checkLength(['streetAddress1', 'postcode', 'city', 'county', 'country'])[1];

    if (lengthsValid) {
      fetch(`https://api.ideal-postcodes.co.uk/v1/postcodes/${this.state.postcode.replace(' ', '')}?api_key=${POSTCODE_APIKEY}`)
      .then(response => response.json())
      .then(data => {
        if (data.code === 2000) {
          const locations = data.result;

          for (const location of locations) {
            if (location.line_1 === this.state.streetAddress1) {
              
              this.setState({
                streetAddress1: location.line_1,
                streetAddress2: location.line_2,
                postcode: location.postcode,
                city: location.district,
                county: location.administrative_county,
                country: 'United Kingdom',
                lat: location.latitude,
                lng: location.longitude,
                locationConfirmed: true
              })
              
              const details = {
                location: {
                  locationName: this.state.locationName,
                  address: 
                    `${this.state.streetAddress1}, ${this.state.streetAddress2} ${this.state.postcode}, ${this.state.city}, ${this.state.county}, ${this.state.country}`,
                  lat: this.state.lat,
                  lng: this.state.lng,
                },
                units: this.state.units
              }

              this.postLocation(details)
            } else {
              console.log('miss')
            }
          }
        } else {
          this.setState({ error: [
            ...this.state.error,
            'invalid-postcode'
          ]}, () => console.log(this.state.error))
        }
      })
    } else {
      this.setState({ error: invalidValues}, () => console.log(this.state.error))
    }
  }


  postLocation = postPackage => {
    fetch('http://localhost:3000/addlocation', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(postPackage)
    })

    setTimeout(this.props.history.push('/dashboard'), 200)
  }

  handleSubmit = event => {
    event.preventDefault();

    const details = {
      location: {
        locationName: this.state.locationName,
        address: 
          `${this.state.streetAddress1}, ${this.state.streetAddress2} ${this.state.postcode}, ${this.state.city}, ${this.state.county}, ${this.state.country}`,
        lat: this.state.lat,
        lng: this.state.lng,
      },
      units: this.state.units
    }

    if (this.state.locationConfirmed === true) {
      this.postLocation(details);
    } else {
      this.checkLocation(details)
    }
  } 

  render() {
      const addressFormProps = {
        locationName: this.state.locationName,
        postcodeSearch: this.state.postcodeSearch,
        streetAddressSearch: this.state.streetAddressSearch,
        streetAddress1: this.state.streetAddress1,
        streetAddress2: this.state.streetAddress2,
        postcode: this.state.postcode,
        city: this.state.city,
        county: this.state.county,
        country: this.state.country,
        suggestedLocations: this.state.suggestedLocations.filter(location => {
          return(location.streetAddress1.toLowerCase().includes(this.state.streetAddressSearch.toLowerCase()))
        }),
        showLocations: this.state.showLocations
      }

      const addUnitFormProps = {
        units: this.state.units,
        serialNo: this.state.serialNo,
        locationDescription: this.state.locationDescription,
        capacity: this.state.capacity
      }

      return (
        <div className='add-location-container'>
          <div className='top'>
            <Link to='/'><CloseIcon fontSize='large' /></Link>
            <div className='title'> Add Location </div>
          </div>
          <form className='add-location-form'>
            <AddressForm
              handleChange={this.handleChange}
              lookUpAddress={this.lookUpAddress}
              selectAddress={this.selectAddress}
              otherProps={addressFormProps}
            />
            <AddUnitsForm
              handleChange={this.handleChange}
              addUnit={this.addUnit}
              otherProps={addUnitFormProps}
            />
            <div className='footer'> 
              <button type='submit' onClick={this.handleSubmit}>Submit</button>
            </div>
          </form>
        </div>
      )
    }
}

export default withRouter(AddLocation);