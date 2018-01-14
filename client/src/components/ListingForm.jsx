import React from 'react';

class ListingForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
                    mainTitle: '',
                    price: null,
                    address: '',
                    city: '',
                    state: '',
                    typeofhome: 'Private Home',
                    guests: null,
                    bedrooms: null,
                    bathrooms: null,
                    description: '',
                    houserules:'',
                    cancellations: '',
                    mainurl:'',
                    secondaryurl:''
                }
  }

  handleInput(property, int, e) {
    var input = e.target.value

    if (int) {
      input = parseInt(input);
    }

    this.setState({
      [property]: input
    })
  }

  addListing(){
    
  }

  render() {

    console.log(this.state.mainTitle, this.state.price, this.state.address, this.state.city, this.state.state, 
      this.state.typeofhome, this.state.guests, this.state.bedrooms, this.state.bathrooms, this.state.description, this.state.houserules,
      this.state.cancellations, this.state.mainurl, this.state.secondaryurl);

    return (

      <div className="container cleanBorder">
          <img src="https://www.sevenkeys.cz/wp-content/uploads/2016/10/Superhost.jpg" id="centerImage" className = "img-responsive " width={400} height={200} mode={'fit'}/>
        <div className="row form-group">

          {/****** First Row with Main Title and Price ****/}
          <div className="col-md-8 marginPush">
             Main Title: <input type="text" className="form-control" value={this.state.mainTitle} onChange={this.handleInput.bind(this, 'mainTitle', false)} placeholder="ex. Hobbiton of the Shire"/>
          </div>

          <div className="col-md-4 marginPush">
             Price Per Night: <input type="text" className="form-control" value={this.state.price} onChange={this.handleInput.bind(this, 'price', true)} placeholder="ex. 999"/>
          </div>

          {/******Second Row with locational information****/}
          <div className="col-md-4 formPush">
            Address: <input type="text" className="form-control" value={this.state.address} onChange={this.handleInput.bind(this, 'address', false)} placeholder="ex. 123 Circle Street"/>
          </div>

          <div className="col-md-4 formPush">
            City: <input type="text" className="form-control" value={this.state.city} onChange={this.handleInput.bind(this, 'city', false)} placeholder="ex. San Francisco"/>
          </div>

          <div className="col-md-4 formPush">
            State: <input type="text" className="form-control" value={this.state.state} onChange={this.handleInput.bind(this, 'state', false)} placeholder="ex. California"/>
          </div>

        {/******Third Row with Type of Home, Description of Home (accomodation, bed, bath)****/}
          <div className="col-md-6 formPush">
          <label htmlFor="houselisting">Type of Home:</label>
<<<<<<< HEAD
            <select className="form-control" id="houselisting">
              <option>Private Home</option>
              <option>Shared Home</option>
              <option>Apartment</option>
              <option>RV</option>
              <option>Tent</option>
=======
            <select className="form-control" value={this.state.typeofhome} onChange={this.handleInput.bind(this, 'typeofhome', false)}>
              <option value="Private Home" >Private Home</option>
              <option value="Shared Home">Shared Home</option>
              <option value="Apartment">Apartment</option>
              <option value="RV">RV</option>
              <option value="Tent">Tent</option>
>>>>>>> completed listing form and is able to capture all data
            </select>
          </div>

         <div className="form-group col-md-2">
          <label htmlFor="houselisting">Accomodates</label>
<<<<<<< HEAD
            <select className="form-control" id="houselisting">
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4 Guests</option>
              <option>5 Guests</option>
              <option>6 Guests</option>
              <option>7+ Guests</option>
=======
            <select className="form-control" value={this.state.guests} onChange={this.handleInput.bind(this, 'guests', true)}>
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5 Guests</option>
              <option value="6">6 Guests</option>
              <option value="7">7+ Guests</option>
>>>>>>> completed listing form and is able to capture all data
            </select>
        </div>

        <div className="form-group col-md-2">
          <label htmlFor="houselisting">Bedrooms</label>
<<<<<<< HEAD
            <select className="form-control" id="houselisting">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7+</option>
=======
            <select className="form-control" value={this.state.bedrooms} onChange={this.handleInput.bind(this, 'bedrooms', true)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7+</option>
>>>>>>> completed listing form and is able to capture all data
            </select>
        </div>

        <div className="form-group col-md-2">
          <label htmlFor="houselisting">Bathrooms</label>
<<<<<<< HEAD
            <select className="form-control" id="houselisting">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7+</option>
=======
            <select className="form-control" value={this.state.bathrooms} onChange={this.handleInput.bind(this, 'bathrooms', true)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7+</option>
>>>>>>> completed listing form and is able to capture all data
            </select>
        </div>
        {/*************** Descriptions House Rules and Cancellations************/}
          <div className="col-md-4 formPush">
            <label htmlFor="comment">Description:</label>
<<<<<<< HEAD
            <textarea class="form-control" rows="5" id="comment"></textarea>
=======
            <textarea class="form-control" rows="4" value={this.state.description} onChange={this.handleInput.bind(this, 'description', false)}></textarea>
>>>>>>> completed listing form and is able to capture all data
          </div>

          <div className="col-md-4 formPush">
            <label htmlFor="comment">House Rules:</label>
<<<<<<< HEAD
            <textarea className="form-control" rows="5" id="comment"></textarea>
=======
            <textarea class="form-control" rows="4" value={this.state.houserules} onChange={this.handleInput.bind(this, 'houserules', false)}></textarea>
>>>>>>> completed listing form and is able to capture all data
          </div>

          <div className="col-md-4 formPush">
            <label htmlFor="comment">Cancellation:</label>
<<<<<<< HEAD
            <textarea className="form-control" rows="5" id="comment"></textarea>
=======
            <textarea class="form-control" rows="4" value={this.state.cancellations} onChange={this.handleInput.bind(this, 'cancellations', false)}></textarea>
>>>>>>> completed listing form and is able to capture all data
          </div>
  
        {/*************** URLs ************/}
          <div className="col-md-6 marginPush">
             Main URL: <input type="text" className="form-control" value={this.state.mainurl} onChange={this.handleInput.bind(this, 'mainurl', false)} placeholder="ex. https://imgur.com/airdnb"/>
          </div>

          <div className="col-md-6 marginPush">
             Main URL: <input type="text" className="form-control" value={this.state.secondaryurl} onChange={this.handleInput.bind(this,'secondaryurl', false)}placeholder="https://imgur.com/airdnb2"/>
          </div>

         <button type="button" className="btn btn-outline-danger btn-block" onClick={this.addListing.bind(this)}>Register with Airdnb</button> 
        </div>
      </div>
    )
  }
}

export default ListingForm




 

