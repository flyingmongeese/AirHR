import React from 'react';

let DescriptionIcons = (props) => {

	return (
		<div>
			<i className="fa fa-users fa-lg d-inline col-md-3" aria-hidden="true"><p>  {sampleData.listings[0].guests} guests</p></i>
			<i className="fa fa-home fa-lg d-inline col-md-3" aria-hidden="true"><p>  {sampleData.listings[0].typeHome} </p></i>
			<i className="fa fa-bed fa-lg d-inline col-md-3" aria-hidden="true"><p>  {sampleData.listings[0].bedrooms} beds</p></i>
			<i className="fa fa-bath fa-lg d-inline col-md-3" aria-hidden="true"><p>  {sampleData.listings[0].bathrooms} baths</p></i>
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

export default DescriptionIcons