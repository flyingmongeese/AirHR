import React from 'react';
import Reservations from './Reservations.jsx';
import DescriptionIcons from './DescriptionIcons.jsx';
import Amenities from './Amenities.jsx';
import Reviews from './Reviews.jsx';
import GoogleMap from './Map.jsx';
import ListingForm from './ListingForm.jsx';

class Listing extends React.Component {

	constructor(props) {
	  super(props);
	}


	render() {

	  var houseRules = null;
	  if (this.props.listing.house_rules !== null) {
	  	houseRules = this.props.listing.house_rules.map((rule, index) => <p key = {index}>{rule}</p>)
	  }

	return (
		<div className="container-fluid">
		
			{/************ Top paralax Image URL ************/}
			<section className="bgimage cleanBorder" style={{backgroundImage: 'url('+this.props.listing.images[0]+')'}}></section>
			<br />

			<div className="container">
				<div className="row">
					<div className="col-md-8 cleanBorder"> 
						{/************ Quick Summary of Home ************/}
						<h3 className="display-4">{this.props.listing.listingtitle}</h3>
						<hr></hr>
						{/************z Home Description ************/}
							<h4>{this.props.listing.typehome} - {this.props.listing.city} - {this.props.listing.state}</h4>
						<br />
						<br />
						{/************ Description Icons ************/}
							<DescriptionIcons listing={this.props.listing}/>
						<br />
						{/************ Summary Description ***********/}
						<div className="col-md-12">
							<p>{this.props.listing.description}</p>
						</div>
						<hr></hr>
						{/************* Amentities ****************/}
						<h4>Amenities</h4>
						<br />
						<br />
							<Amenities listing={this.props.listing}/>
						<hr></hr>
						{/************* House Rules ****************/}
						<h4>House Rules</h4>
						<br />
							<div className="col-md-12">
								<br />
								{houseRules}
							</div>
						<hr></hr>

						{/*****************Cancellations Component*****************/}
						<h4>Cancellations</h4>
						<div className="col-md-12">
							<br />
							<p>{this.props.listing.cancellations}</p>
						</div>

						<hr></hr>
					</div>

					{/*****************Reservations Component*****************/}
					<div className="col-md-4 rightBorder zAxis">
						<Reservations listing={this.props.listing}/>	
					</div>
			</div>
		</div>
			{/******************Bottom Image*******************/}
			<br />
			<section className="bgimage cleanBorder" style={{backgroundImage: 'url('+this.props.listing.images[1]+')'}}></section>
			<br />
			{/************Reviews View**********/}
			<div className="container-fluid cleanBorder">
				<div className="row .row-eq-height > col-12">
					<div className="col-6">
						<GoogleMap city={this.props.listing.city} State={this.props.listing.state} />
					</div>

					<div className="col-6">
						<Reviews listing={this.props.listing}/>
						<Reviews listing={this.props.listing}/>
						<Reviews listing={this.props.listing}/>
					</div>
				</div>
			</div>
	</div>
 	)
  }



} 

export default Listing; 


