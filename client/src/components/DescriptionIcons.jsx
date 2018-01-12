import React from 'react';

let DescriptionIcons = ({listing}) => {

	return (
		<div>
			<i className="fa fa-users fa-lg d-inline col-md-3" aria-hidden="true"><p>  {listing.guests} guests</p></i>
			<i className="fa fa-home fa-lg d-inline col-md-3" aria-hidden="true"><p>  {listing.typehome} </p></i>
			<i className="fa fa-bed fa-lg d-inline col-md-3" aria-hidden="true"><p>  {listing.bedrooms} beds</p></i>
			<i className="fa fa-bath fa-lg d-inline col-md-3" aria-hidden="true"><p>  {listing.bathrooms} baths</p></i>
		</div>
	)
}

export default DescriptionIcons