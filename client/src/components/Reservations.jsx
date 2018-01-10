import React from 'react';

let Reservations = () => {

	return (

		<div className="card sticky-top">
			 <div className="card-header">
				<h4>${sampleData.listings[0].price} per night</h4>
			</div>
			<br />

		  	<div className="jumbotron"> 
		  	</div>

		  	<div className="card-body">
				<input className="form-control" type="text" placeholder="Check In"/>
				<br />
				<input className="form-control" type="text" placeholder="Check Out"/>
				<br />
				<button type="button" className="btn btn-danger btn-lg btn-block">REQUEST A BOOKING</button>
		  	</div>

				<div className="card-footer text-muted">5 STARS</div>
		</div>
	)
}

var sampleData = {
    id: 1,
    userName: 'FlyingMongeese',
    password: 'flysouth',
    listings: [{
      price: 133,
      listing_id: 1,
      reserved_dates: [], //tuple of dates i.e [[1/9/18, 1/12/18], ...]
      imageURL: ['https://static.pexels.com/photos/261426/pexels-photo-261426.jpeg','https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'],
      summary: "Grand and Cozy SF Studio",
      Street: '123 Circle St.',
      City: 'San Francisco',
      State: 'CA',
      rating: 4,
      private: true, //private home or not
      typeHome: 'Entire Home', //apartment, home, tent, RV
      bedrooms: 2,
      bathrooms: 1,
      guests: 4,
      description: "Come enjoy our large studio in San Francisco's charming and convenient Bernal Heights! You'll enjoy your own cozy and private lodging with a romantic gas fireplace, wood and stone floors and artistic decor. You will be close to world class vies of San Francisco and it's beautiful bay. Bus lines are close by and parking is very easy!",
      amenities: [{body: null}, //might not be necessary. 
            {wifi: true},
            {kitchen: true},
            {parking: false},
            {pool: false}
            ],
      house_rules: ['No honey badgers allowed please','No jumping jacks after 9', 'Please clean up after yourselfs', 'Hide food from bears'],
      cancellations: 'For cancellations, please notify us 1 week in advance.',
      lat: null,
      lon: null,
      comments: [{user: {id: 2,
                        username: 'Prism Nick'}},
                 {body: 'Perfect place to make prisms!' },
                 {date: '01-01-2018'}]
    }]
 };

export default Reservations;