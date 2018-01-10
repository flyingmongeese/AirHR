import React from 'react';
import Reservations from './Reservations.jsx';

let Listing = () => {

	return (
		<div className="container-fluid">
			<section className="bgimage cleanBorder" style={{backgroundImage: 'url('+sampleData.listings[0].imageURL[0]+')'}}></section>
			<br />

			<div className="container">
				<div className="row">
					<div className="col-md-8 cleanBorder"> 
						<h3 className="display-4">{sampleData.listings[0].summary}</h3>
						<br />
							<h4>{sampleData.listings[0].typeHome} - {sampleData.listings[0].City} - {sampleData.listings[0].State}</h4>
							<hr></hr>
							<i className="fa fa-users fa-lg d-inline col-md-3" aria-hidden="true"><p>  {sampleData.listings[0].guests} guests</p></i>
							<i className="fa fa-home fa-lg d-inline col-md-3" aria-hidden="true"><p>  {sampleData.listings[0].typeHome} </p></i>
							<i className="fa fa-bed fa-lg d-inline col-md-3" aria-hidden="true"><p>  {sampleData.listings[0].bedrooms} beds</p></i>
							<i className="fa fa-bath fa-lg d-inline col-md-3" aria-hidden="true"><p>  {sampleData.listings[0].bathrooms} baths</p></i>
						<br />
						<br />
						<div className="col-md-12">
							<p>{sampleData.listings[0].description}</p>
						</div>
						<hr></hr>
						<h4>Amentities</h4>
						<br />
						<br />
							<i className="fa fa-wifi fa-lg d-inline col-md-3" aria-hidden="true"><p> Wifi </p></i>
							<i className="fa fa-home fa-lg d-inline col-md-3" aria-hidden="true"><p> Kitchen </p></i>
							<i className="fa fa-car fa-lg d-inline col-md-3" aria-hidden="true"><p> Car </p></i>
							<i className="fa fa-tint fa-lg d-inline col-md-3" aria-hidden="true"><p> Pool </p></i>
							<i className="fa fa-bicycle fa-lg d-inline col-md-3" aria-hidden="true"><p> Gym  </p></i>
						<hr></hr>

						<h4>House Rules</h4>
						<br />
						<div className="col-md-12">
							<br />
							<p>{sampleData.listings[0].house_rules[0]}</p>
							<p>{sampleData.listings[0].house_rules[1]}</p>
							<p>{sampleData.listings[0].house_rules[2]}</p>
							<p>{sampleData.listings[0].house_rules[3]}</p>
						</div>
						<hr></hr>

						<h4>Cancellations</h4>
						<div className="col-md-12">
							<br />
							<p>{sampleData.listings[0].cancellations}</p>
						</div>

						<hr></hr>
					</div>

						<div className="col-md-4 rightBorder">
							<Reservations />	
						</div>

			</div>
		</div>
			<br />
			<section className="bgimage cleanBorder" style={{backgroundImage: 'url('+sampleData.listings[0].imageURL[1]+')'}}></section>
			<br />
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


export default Listing; 


