import React from 'react';


class ConfirmView extends React.Component {


  constructor(props) {
  	super(props);
  }


  render() {
  	return (


  		<div className = 'row centerDiv'> 
  		  <div className = 'centerDiv'> 
  			<br />
  		  	<br />
  		  	<br />
  		  	<br />
  		  	<br />
  		  	<br />
  		  	<br />
  		  	<br />
  		  	<br />
  		  	<br />
  			<h3> Confirmed! Your Listing Is Now Public On Airdnb </h3>
  			<span> View Your Newly Created Listing From Your <span className = 'green' onClick = {() => this.props.handleProfClick()}> Profile Page </span> </span>
  		  
  		  </div>

  		</div>

  	)
  }












}









export default ConfirmView;