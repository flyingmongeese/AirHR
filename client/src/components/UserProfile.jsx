import React from 'react';
import data2 from '../../../sampleData2.js';
import HouseListing from './HouseListing.jsx';
import Search from './Search.jsx';
import Navbar from './Navbar.jsx';
import SearchView from './SearchView.jsx';
import Footer from './Footer.jsx';
import ReservationListing from './ReservationListing.jsx';
import Default from './defaultProfileValues.js';

const axios = require('axios');

class UserProfile extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      contact: [this.props.user.email, this.props.user.phone],
      contactView: 'static',
      listings: []
    }
  }

  componentDidMount() {
    this.getUserData();
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

  getUserData() {
    var app = this;
    axios.get('/profile')
      .then(response => {
        console.log('getUserData response: ', response);
        app.setState({
          user: response.data
        })
      })
      .catch(error => {
        this.props.redirect('loginView');
      });
  }

  patchInfo(info) {
    var app = this;
    axios.patch('/profile', info)
      .then(response => {
        console.log('patched: ', response);
      })
      .catch(error => {
        console.error(error);
      })
  }

  handleUserInput(property, index, event) {
    var state = this.state[property];
    state[index] = event.target.value;

    this.setState({ [property]: state })
  }

  handleEmptyInput(property, index, field) {
    if (this.state[property][index] === null) {
      this.state[property][index] = Default[field];
      return this.state[property][index];
    } else {
      return this.state[property][index];
    }
  }

  showEditor(property) {
    this.setState({ [property]: 'edit' });
  }

  saveEdit(viewProp, property, fields) {
    var data = {};
    for (var i = 0; i < fields.length; i++) {
      var input = this.state[property][i];
      if (input === '') {
        input = null;
      }
      data[fields[i]] = input;
    }
    data.fields = fields
    this.patchInfo(data);    
    this.setState({ [viewProp]: 'static' })
  }

  switchContactView() {
    if (this.state.contactView === 'static') {
      return (
        <div className="card-body">
          <h5 className="card-title">{ this.state.user.username }'s Profile</h5>
          <p className="card-text"> { this.handleEmptyInput('contact', 0, 'email') } </p>
          <p className="card-text"> { this.handleEmptyInput('contact', 1, 'phone') } </p>
          <button className="btn btn-primary" onClick={this.showEditor.bind(this, 'contactView') } > Add Verifications </button>
        </div>
      );
    } else if (this.state.contactView === 'edit') {
      return (
        <div className="card-body">
          <h5 className="card-title">{ this.state.user.username }'s Profile</h5>
          <div className="form-group" >
            <input className="form-control"
                   type="text"
                   name="email"
                   value={ this.handleEmptyInput('contact', 0, 'email') } 
                   onChange={ this.handleUserInput.bind(this, 'contact', 0) } />
          </div>
          <div className="form-group">
            <input className="form-control"
                   type="text"
                   name="phone"
                   value={ this.handleEmptyInput('contact', 1, 'phone') } 
                   onChange={ this.handleUserInput.bind(this, 'contact', 1) } />
          </div>
          <button className="btn btn-primary" 
                  onClick={this.saveEdit.bind(this, 'contactView', 'contact', ['email', 'phone']) } 
          > Save Edits </button>
        </div>
      )
    }
  }

  render() {

    return (
      <div>
        {console.log('profile', this.state.user)}
        {console.log('id', this.state.id)}
        <div className="container-fluid">
          <div className="row UserProfile">
            <div className="col-md-4"> 
              <div className="card">
                <img src="http://cvl-demos.cs.nott.ac.uk/vrn/queue/59b4192763dd4.jpg" className="card-img-top rounded-circle border border-dark float-left" />
                { this.switchContactView() }
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

{/* <div className="card-body">
                  <h5 className="card-title">{ this.state.user.username }'s Profile</h5>
                  <p className="card-text"> Email Address </p>
                  <p className="card-text"> Phone Number </p>
                  <p className="card-text"> Contact </p>
                  <a href="#" className="btn btn-primary"> Add Verifications </a>
                </div> */}