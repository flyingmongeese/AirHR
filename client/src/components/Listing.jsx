import React from 'react';
import Reservations from './Reservations.jsx';
import DescriptionIcons from './DescriptionIcons.jsx';
import Amentities from './Amentities.jsx';

let Listing = () => {

	return (
		<div className="container-fluid">
			{/************ Top paralax Image URL ************/}
			<section className="bgimage cleanBorder" style={{backgroundImage: 'url('+sampleData.listings[0].imageURL[0]+')'}}></section>
			<br />

			<div className="container">
				<div className="row">
					<div className="col-md-8 cleanBorder"> 
						{/************ Quick Summary of Home ************/}
						<h3 className="display-4">{sampleData.listings[0].summary}</h3>
						<hr></hr>
						{/************ Home Description ************/}
							<h4>{sampleData.listings[0].typeHome} - {sampleData.listings[0].City} - {sampleData.listings[0].State}</h4>
						<br />
						<br />
						{/************ Description Icons ************/}
							<DescriptionIcons />
						<br />
						{/************ Summary Description ***********/}
						<div className="col-md-12">
							<p>{sampleData.listings[0].description}</p>
						</div>
						<hr></hr>
						{/************* Amentities ****************/}
						<h4>Amentities</h4>
						<br />
						<br />
							<Amentities />
						<hr></hr>
						{/************* House Rules ****************/}
						<h4>House Rules</h4>
						<br />
							<div className="col-md-12">
								<br />
								{sampleData.listings[0].house_rules.map((rule) => <p>{rule}</p>)}
							</div>
						<hr></hr>
						{/*****************Cancellations Component*****************/}
						<h4>Cancellations</h4>
						<div className="col-md-12">
							<br />
							<p>{sampleData.listings[0].cancellations}</p>
						</div>

						<hr></hr>
					</div>

					{/*****************Reservations Component*****************/}
					<div className="col-md-4 rightBorder">
						<Reservations />	
					</div>
			</div>
		</div>
			{/******************Bottom Image*******************/}
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


