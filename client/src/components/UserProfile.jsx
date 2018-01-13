import React from 'react';
import data2 from '../../../sampleData2.js';
import HouseListing from './HouseListing.jsx';
import Search from './Search.jsx';
import Navbar from './Navbar.jsx';
import SearchView from './SearchView.jsx';
import Footer from './Footer.jsx';
import ReservationListing from './ReservationListing.jsx';

const axios = require('axios');

class UserProfile extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      listings: []
    }
  }

  componentDidMount() {
    var instance = this;

    axios.get('/reservations').then(function(response) {
      // console.log('RESPONSE FROM GET IS', response.data.rows);
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
        <div className="container-fluid">
          <div className="row UserProfile">
            <div className="col-md-4"> 
              <div className="card">
                <img src="http://cvl-demos.cs.nott.ac.uk/vrn/queue/59b4192763dd4.jpg" className="card-img-top rounded-circle border border-dark float-left" />
                <div className="card-body">
                  <h5 className="card-title">{ this.state.user.username }'s Profile</h5>
                  <p className="card-text"> Email Address </p>
                  <p className="card-text"> Phone Number </p>
                  <p className="card-text"> Contact </p>
                  <a href="#" className="btn btn-primary"> Add Verifications </a>
                </div>
            </div>
            <div className="card UserProfile">
              <div className="card-header">
                About Me
              </div>
                <div className="card-body">
                  <h5 className="card-title">User</h5>
                  <p className="card-text">PPHSHHSHTHTHHTT</p>
                  <a href="#" className="btn btn-primary">Add more about me</a>
                </div>
              </div>
            </div>
          <div className="col-md-8">
            <p className="userGreeting"> Welcome to your profile! </p>
            <p>San Fransisco, CA. Joined 12/4/2014</p>
            <button type="button" className="btn btn-primary">Edit Profile</button>
            <h3> Upcoming Trips </h3>
            {this.state.listings.map((listing) => <ReservationListing house = {listing} />)}
          </div>
        </div>
          <Footer />
        </div>
      </div>
    )

  }
}
export default UserProfile;