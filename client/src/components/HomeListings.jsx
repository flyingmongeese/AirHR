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
      
      <div className="card">
        <img className="card-img-top" src="https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg" alt="Card image cap"n />
        <div className="card-body">
          <h5 className="card-title">$449.99/night</h5>
          <p className="card-text">4bd 3bth</p>
          <p className="card-text">Close to Casinos!</p>
          <p className="card-text">No Monsters under The bed!</p>

          <a href="#" className="btn btn-primary">Reserve</a>
        </div>
      </div>



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