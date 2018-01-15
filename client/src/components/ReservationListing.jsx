import React from 'react';
import moment from 'moment';

class ReservationListing extends React.Component {

  constructor(props) {
  	super(props);
  }



  render() {

    var bedroomData;
    this.props.house.bedrooms !== 1 ? bedroomData = 'beds' : bedroomData = 'bed'

    var bathroomData;
    this.props.house.bathrooms !== 1 ? bathroomData = 'baths' : bathroomData = 'bath'

    var randomNumber = function(min, max) {
    var number = Math.ceil((max-min) * Math.random())
      return number
    }

    var isoDate = new Date().toISOString()
    var fromDateObject = Date.parse(this.props.house.reserved_dates[0])

    var dateToReservation = Math.abs(fromDateObject - Date.parse(isoDate))
    var duration = moment.duration(dateToReservation, 'milliseconds');

    var daysTillRes = duration._data.days.toString().length === 1 ? daysTillRes = '0'+duration._data.days.toString() : daysTillRes = duration._data.days;
    var hoursTillRes = duration._data.hours.toString().length === 1 ? hoursTillRes = '0'+duration._data.hours.toString() : hoursTillRes = duration._data.hours;

    var date = new Date();
    var year = date.getFullYear();
    
    var fromDate = this.props.house.reserved_dates[0].split('T')[0].slice(5) +'-'+year;
    var toDate = this.props.house.reserved_dates[1].split('T')[0].slice(5) +'-'+year;


    var numberOfRatings = randomNumber(1,10000);

  	return (
      
			<div className="row centerDiv formPush">

        <a href="#" className="col-md-4 shadowButton"><img src = {this.props.house.images[0]} 
          className = "img-thumbnail img-responsive " onClick = {() => this.props.handleClick(this.props.house)} width={600} height={400} mode={'fit'}/></a>

        <div className="col-6 shadowButton"> 
          <h6>
              <div>{this.props.house.typehome} - {this.props.house.bedrooms} {bedroomData} - {this.props.house.bathrooms} {bathroomData}</div>
              {this.props.house.listingtitle}
              <br />
              <br />
              {this.props.house.street}
              <br />
              {this.props.house.city} , {this.props.house.state}
          </h6>
          <p id="changeToRed">
            Start Date : {fromDate}
            <br />
            End Date&nbsp;&nbsp; : {toDate}
          </p>

        </div>
	      <div className="col-md-2 centerDiv shadowButton reservationTimer">
        <br />
          <p className="display-4">{duration._data.days}<h5>&nbsp;days</h5></p>
          <p className="display-4">{duration._data.hours}<h5>&nbsp;hours</h5></p>
        </div>
  		</div> 
  	)
  }
}


export default ReservationListing;

// 8 to 4 

