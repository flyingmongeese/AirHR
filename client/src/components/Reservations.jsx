import React from 'react';
import Calendar from './Calendar.jsx';
const axios = require('axios');

class Reservations extends React.Component {

  constructor(props) {
  	super(props);
  	this.buttonClickFn = this.buttonClickFn.bind(this);
  	this.state = {
  	  from: undefined,
  	  to: undefined,
  	  clash: 'neither'
  	}
  } 

  sendBookingRequest(fromDate, toDate) {
  	this.setState({
  		from: fromDate,
  		to: toDate
  	})
  }

  buttonClickFn(fromDate, toDate) {
  	var fromDate = fromDate.toString();
  	fromDate = fromDate.split('GMT')[0];
  	fromDate = fromDate.slice(0, fromDate.length - 1);
  	var toDate = toDate.toString();
  	toDate = toDate.split('GMT')[0];
  	toDate = toDate.slice(0, toDate.length - 1);
  	var id = this.props.listing.id;
  	
  	axios.post('/dates', {fromDate: fromDate, toDate: toDate, id: id}).then((response) => {
  	  // console.log(response);
  	  // console.log(response.data)
      if (response.data === 'not logged in') {
        this.setState((prevState) => {
          return {
            from: prevState.from,
            to: prevState.to,
            clash: 'loggedOut'
          }
        })
      }
  	  if (response.data === 'clash') {
  	  	// render a 'sorry, we could not book for these dates'
  	  	this.setState((prevState) => {
  	  		return {
  	  			from: prevState.from,
  	  			to: prevState.to,
  	  			clash: true
  	  		}
  	  	})
  	  } 
  	  if (response.data === 'booked') {
  	  	this.setState((prevState) => {
	  	  return {
	  	    from: prevState.from,
	  		to: prevState.to,
	  		clash: 'nope'
	  	  }
  	  	})
  	  }
  	}).catch((error) => {
  	  console.error(error);
  	})

  }

  render() {
  	var clashMessage = null;
  	if (this.state.clash === true) {
  	  clashMessage = <div> Sorry, these dates are unavailable </div>
  	}

  	if (this.state.clash === 'nope') {
  	  clashMessage = <div> Consider it done! </div>
  	}

    if (this.state.clash === 'loggedOut') {
      clashMessage = <div> You must be logged in to request a booking! </div>
    }

    var ratings = null;
    if (this.props.listing.rating !== null) {
      ratings = <span id="inlineBlock">{this.props.listing.rating.map((star, index) => <i key = {index} className="fa fa-star" id="starUpMargin" aria-hidden="true"></i>)} {this.props.listing.numberOfRatings}</span>
    }

  	return (

		<div className="card sticky-top zAxis">
			 <div className="card-header">
				<h4 className="text-center">${this.props.listing.price} USD</h4>
			</div>
			<br />

			<div> {clashMessage} </div>
		  	<div className="card-body">

				<Calendar changeFn = {this.sendBookingRequest.bind(this)} />
				<br />
				<button type="button" className="btn btn-danger btn-lg btn-block" onClick = {() => this.buttonClickFn(this.state.from, this.state.to)}>REQUEST A BOOKING</button>
		  	</div>
        {ratings}
		</div>



  		)
  }



}

export default Reservations;