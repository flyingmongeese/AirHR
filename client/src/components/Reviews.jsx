import React from 'react';

let Reviews = ({listing}) => {	
	console.log(listing);
	var comments = JSON.parse(listing.comments);
	console.log(JSON.parse(listing.comments));
	return (
			<div className="cleanBorder row marginPush">
				
					<div className="d-inline col-sm-1">
						<img width={100} height={65} mode={'fit'} src={comments.imageURL}/>
					</div>
					<div className="col-sm-1"></div>
					<div className="d-inline col-sm-8">
						<h6>" {comments.body} "</h6>
					</div>
					<div className="col-sm-1"></div>
					<div className="d-inline col-sm-1">
						<i className="fa fa-thumbs-up fa-3x" aria-hidden="true"></i>
					</div>
				
	    	</div>
	)
}

export default Reviews; 