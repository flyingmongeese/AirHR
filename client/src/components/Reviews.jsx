import React from 'react';

let Reviews = ({listing}) => {	
	// console.log(listing);
	let comments = listing.description;
	// console.log(JSON.parse(listing.description));
	let image = null;
	let body = null;
	if (comments) {
	  image = <img width={100} height={65} mode={'fit'} src={comments.imageURL}/>
	  body = <h6>" {comments.body} "</h6>
	}
	return (
			<div className="cleanBorder row marginPush">
				
					<div className="d-inline col-sm-1">
					{image}
					</div>
					<div className="col-sm-1"></div>
					<div className="d-inline col-sm-8">
						{body}
					</div>
					<div className="col-sm-1"></div>
					<div className="d-inline col-sm-1">
						<i className="fa fa-thumbs-up fa-3x" aria-hidden="true"></i>
					</div>
				
	    	</div>
	)
}

export default Reviews; 