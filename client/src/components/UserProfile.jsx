import React from 'react';
import data2 from '../../../sampleData2.js';
import HouseListing from './HouseListing.jsx';
import Search from './Search.jsx';
import SearchView from './SearchView.jsx';

const axios = require('axios');

class HomeView extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      listings: []
    }
  }

  componentDidMount() {
    var instance = this;

    axios.get('/listings').then(function(response) {
      console.log('RESPONSE FROM GET IS', response.data.rows);
      instance.setState({
        listings: response.data.rows
      })
    }).catch(function(error) {
      console.log(error)
    })

  }

  render() {
    return (
        <div> 
        <div>
              <div className="row">
                <div className="col-lg-12 jumbotron cleanBorder center-text"> 
                  <img src="logo/airdnb.png" width={360} height={90} mode='fit' id="shiftLeft"/>
                  <br />
                  <br />
                  <h2 className="display-4"> Book unique homes and</h2> 
                  <h2 className="display-4"> experiences all over the world. </h2>
                  <br />
                  <br />
                  <Search clickFn = {this.props.searchClickFn} listings={this.state.listings}/>
                </div>
              </div>
            </div>
        <div className = 'container-fluid'> 
          <div className = 'row'>
            <div className="col-md-12 cleanBorder"> 
            <div className = 'row'>
              {this.state.listings.map((house) => <HouseListing key = {JSON.stringify(house)} 
                                                                house = {house} 
                                                                listingClickFn={ this.props.listingClickFn } />
              )}
              </div>
            </div> 
          
          </div>
        </div> 
      </div>
    )

  }

}

export default HomeView;