import React from 'react';
import data2 from '../../../sampleData2.js';
import HouseListing from './HouseListing.jsx';

const axios = require('axios');

const maps_API_KEY = require('../../../server/config/mapsAPI.js').maps_API_KEY;
process.env.maps_API_KEY = maps_API_KEY;

class GoogleMap extends React.Component {
  	
  constructor(props) {
  	super(props);
  }


  render() {

    console.log('map api: ', process.env)

    // console.log('listing props, ', this.props.listings)
  	return (

            <div className='cleanBorder' id="formPadding">
              <iframe  
                width="100%"
                height="500"
                src={`https://www.google.com/maps/embed/v1/place?key=${maps_API_KEY}&q=${this.props.city}+${this.props.State}`} 
                ></iframe>
              </div>

  	)
  }
}

export default GoogleMap;

// need from DATA
// 1. images
// 2. Listing title
// 2. Home Type (e.g. 'cabin')
// 3. Price per night
// 4. Star rating/Number of reviews
// 5. Superhost (?)
// 


  	    // <span> {house1.listingTitle} </span>
  	    // <span> {house1.price} </span> 
  	    // <img src = {house1.images[0]}/>