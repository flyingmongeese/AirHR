import React from 'react';

class Search extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      location: ''
    };
  };

  locationChange(event) {
    this.setState({
      location: event.target.value
    });
  }

  clickAdd(){
  	console.log(this.state.location);
   }
   
  render() {
	  return (
	  <div className="col-md-12">
	    <div className="input-group">
	    <input className="form-control" type="text" value={this.state.city} onChange={this.locationChange.bind(this)} placeholder="search..."/>
	    <span className="input-group-btn">
	      <button className="btn btn-danger" type="button" onClick={this.clickAdd.bind(this)}>SEARCH</button>
	    </span>
	    </div>
	  </div> 
	  )
  }

};

export default Search