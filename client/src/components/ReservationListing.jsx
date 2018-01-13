import React from 'react';


class ReservationListing extends React.Component {

  constructor(props) {
  	super(props);
  }



  render() {

    var bedroomData;
    this.props.house.bedrooms !== 1 ? bedroomData = 'beds' : bedroomData = 'bed'

    var randomNumber = function(min, max) {
    var number = Math.ceil((max-min) * Math.random())
      return number
    }

    var numberOfRatings = randomNumber(1,10000);

  	return (
      
			<div> 

        <a href="#"><img src = {this.props.house.images[0]} className = "img-responsive rounded img-thumbnail" width={200} height={120} mode={'fit'}/></a>

        <h6 id="changeToRed">{this.props.house.typehome} - {this.props.house.bedrooms} {bedroomData}</h6>

	      <h6 id="hi">{this.props.house.listingtitle}</h6>
      
  		</div> 
  	)
  }
}


export default ReservationListing;

// 8 to 4 

