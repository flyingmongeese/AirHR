import React from 'react';
import Reservations from './Reservations.jsx';
import DescriptionIcons from './DescriptionIcons.jsx';
import Amenities from './Amenities.jsx';
import Reviews from './Reviews.jsx';

let Listing = ({ listing }) => {

	return (
		<div className="container-fluid">
			{console.log(listing.images[0])}
			{/************ Top paralax Image URL ************/}
			<section className="bgimage cleanBorder" style={{backgroundImage: 'url('+listing.images[0]+')'}}></section>
			<br />

			<div className="container">
				<div className="row">
					<div className="col-md-8 cleanBorder"> 
						{/************ Quick Summary of Home ************/}
						<h3 className="display-4">{listing.listingtitle}</h3>
						<hr></hr>
						{/************z Home Description ************/}
							<h4>{listing.typehome} - {listing.city} - {listing.state}</h4>
						<br />
						<br />
						{/************ Description Icons ************/}
							<DescriptionIcons listing={listing}/>
						<br />
						{/************ Summary Description ***********/}
						<div className="col-md-12">
							<p>{listing.description}</p>
						</div>
						<hr></hr>
						{/************* Amentities ****************/}
						<h4>Amenities</h4>
						<br />
						<br />
							<Amenities listing={listing}/>
						<hr></hr>
						{/************* House Rules ****************/}
						<h4>House Rules</h4>
						<br />
							<div className="col-md-12">
								<br />
								{listing.house_rules.map((rule) => <p>{rule}</p>)}
							</div>
						<hr></hr>

						{/*****************Cancellations Component*****************/}
						<h4>Cancellations</h4>
						<div className="col-md-12">
							<br />
							<p>{listing.cancellations}</p>
						</div>

						<hr></hr>
					</div>

					{/*****************Reservations Component*****************/}
					<div className="col-md-4 rightBorder zAxis">
						<Reservations listing={listing}/>	
					</div>
			</div>
		</div>
			{/******************Bottom Image*******************/}
			<br />
			<section className="bgimage cleanBorder" style={{backgroundImage: 'url('+listing.images[1]+')'}}></section>
			<br />
			
			{/************Reviews View**********/}
			<div className="container-fluid cleanBorder">
				<h1 className="display-4 text-center">
					Reviews
				</h1>
				<br />
					<Reviews listing={listing}/>
					<Reviews listing={listing}/>
					<Reviews listing={listing}/>
			</div>

		
	</div>
	)
}

export default Listing; 


