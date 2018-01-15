import React from 'react';

let Amenities = (props) => {

	return (
		<div>
			<i className="fa fa-wifi fa-lg d-inline col-md-3" aria-hidden="true"><p> Wifi </p></i>
	       	<i className="fa fa-home fa-lg d-inline col-md-3" aria-hidden="true"><p> Kitchen </p></i>
	       	<i className="fa fa-car fa-lg d-inline col-md-3" aria-hidden="true"><p> Car </p></i>
	       	<i className="fa fa-tint fa-lg d-inline col-md-3" aria-hidden="true"><p> Pool </p></i>
	       	<i className="fa fa-bicycle fa-lg d-inline col-md-3" aria-hidden="true"><p> Gym  </p></i>
		</div>
	)
}

export default Amenities