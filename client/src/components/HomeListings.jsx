import React from 'react';

class HomeListings extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      location: ''
    };
  };

  // locationChange(event) {
  //   this.setState({
  //     location: event.target.value
  //   });
  // }

  // clickAdd(){
  // 	console.log(this.state.location);
  //  }
   
  render() {
	  return (
<div className="container-fluid">
  <div className="row">
    <div className="col-sm-3">
      One of Four colums
    </div>
    <div className="col-sm-3">
      Two of Four columns
    </div>
    <div className="col-sm-3">
      Three of Four columns
    </div>
    <div className="col-sm-3">
      Four of Four columns
    </div>
  </div>
</div>
	  )
  }

};

export default HomeListings