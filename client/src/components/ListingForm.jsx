import React from 'react';

class ListingForm extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div className="container cleanBorder">
          <img src="https://www.sevenkeys.cz/wp-content/uploads/2016/10/Superhost.jpg" id="centerImage" className = "img-responsive " width={400} height={200} mode={'fit'}/>
        <div className="row form-group">

          {/****** First Row with Main Title and Price ****/}
          <div className="col-md-8 marginPush">
             Main Title: <input type="text" className="form-control" placeholder="ex. Hobbiton of the Shire"/>
          </div>

          <div className="col-md-4 marginPush">
             Price Per Night: <input type="text" className="form-control" placeholder="ex. 999"/>
          </div>

          {/******Second Row with locational information****/}
          <div className="col-md-4 formPush">
            Address: <input type="text" className="form-control" placeholder="ex. 123 Circle Street"/>
          </div>

          <div className="col-md-4 formPush">
            City: <input type="text" className="form-control" placeholder="ex. San Francisco"/>
          </div>

          <div className="col-md-4 formPush">
            State: <input type="text" className="form-control" placeholder="ex. California"/>
          </div>

        {/******Third Row with Type of Home, Description of Home (accomodation, bed, bath)****/}
          <div className="col-md-6 formPush">
          <label htmlFor="houselisting">Type of Home:</label>
            <select className="form-control" id="houselisting">
              <option>Private Home</option>
              <option>Shared Home</option>
              <option>Apartment</option>
              <option>RV</option>
              <option>Tent</option>
            </select>
          </div>

         <div className="form-group col-md-2">
          <label htmlFor="houselisting">Accomodates</label>
            <select className="form-control" id="houselisting">
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4 Guests</option>
              <option>5 Guests</option>
              <option>6 Guests</option>
              <option>7+ Guests</option>
            </select>
        </div>

        <div className="form-group col-md-2">
          <label htmlFor="houselisting">Bedrooms</label>
            <select className="form-control" id="houselisting">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7+</option>
            </select>
        </div>

        <div className="form-group col-md-2">
          <label htmlFor="houselisting">Bathrooms</label>
            <select className="form-control" id="houselisting">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7+</option>
            </select>
        </div>
        {/*************** Descriptions House Rules and Cancellations************/}
          <div className="col-md-4 formPush">
            <label htmlFor="comment">Description:</label>
            <textarea class="form-control" rows="5" id="comment"></textarea>
          </div>

          <div className="col-md-4 formPush">
            <label htmlFor="comment">House Rules:</label>
            <textarea className="form-control" rows="5" id="comment"></textarea>
          </div>

          <div className="col-md-4 formPush">
            <label htmlFor="comment">Cancellation:</label>
            <textarea className="form-control" rows="5" id="comment"></textarea>
          </div>
  
        {/*************** URLs ************/}
          <div className="col-md-6 marginPush">
             URL: <input type="text" className="form-control" placeholder="Main Photo URL"/>
          </div>

          <div className="col-md-6 marginPush">
             URL: <input type="text" className="form-control" placeholder="Secondary Photo URL"/>
          </div>

         <button type="button" className="btn btn-outline-danger btn-block">Register with Airdnb</button> 
        </div>
      </div>
    )
  }
}

export default ListingForm




 

