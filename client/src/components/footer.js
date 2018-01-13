
import React from 'react';
import data2 from '../../../sampleData2.js';
import HouseListing from './HouseListing.jsx';
import Search from './Search.jsx';
import Navbar from './Navbar.jsx';
import SearchView from './SearchView.jsx';

const axios = require('axios');

class Footer extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      listings: []
    }
  }


render(){
	return(
 <div className="container-fluid border UserProfile">
          <div className="row"> 
            <div className="col-md-3">
              <div className="card-body">
                <form className="form-inline">
                  <label>Currency</label>
                  <select class="custom-select my-1 mr-sm-2">
                    <option selected> Choose... </option>
                    <option value="1">US Dollars</option>
                    <option value="2">Swiss Francs</option>
                    <option value="3">Everlasting Gobstobers</option>
                    <option value="4">BitCoin</option>
                    <option value="5">Orphan Souls</option>
                    </select>
                </form>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card-body">
                <h5 className="card-title">AirDnB</h5>
                <p className="btn-link">Help</p>
                <p className="btn-link">Policy</p>
                <p className="btn-link">Terms</p>
                <p className="btn-link">Privacy</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-body">
                <h5 className="card-title">Discover</h5>
                <p className="btn-link">Trust and Saftey</p>
                <p className="btn-link">Site Map</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-body">
                <h5 className="card-title">Hosting</h5>
                <p className="btn-link">Why host?</p>
                <p className="btn-link">The mess you're about to get in</p>
              </div>
            </div>
            </div>
          </div>
        )
	}
}

export default Footer