var statesArray = [ 'AL',
  'AK',
  'AS',
  'AZ',
  'AR',
  'CA',
  'CO',
  'CT',
  'DE',
  'DC',
  'FM',
  'FL',
  'GA',
  'GU',
  'HI',
  'ID',
  'IL',
  'IN',
  'IA',
  'KS',
  'KY',
  'LA',
  'ME',
  'MH',
  'MD',
  'MA',
  'MI',
  'MN',
  'MS',
  'MO',
  'MT',
  'NE',
  'NV',
  'NH',
  'NJ',
  'NM',
  'NY',
  'NC',
  'ND',
  'MP',
  'OH',
  'OK',
  'OR',
  'PW',
  'PA',
  'PR',
  'RI',
  'SC',
  'SD',
  'TN',
  'TX',
  'UT',
  'VT',
  'VI',
  'VA',
  'WA',
  'WV',
  'WI',
  'WY' ];
var homeTypeArray = ['apartment', 'home', 'tent', 'RV']

var randomNumber = function(min, max) {
  var number = Math.round((max-min) * Math.random())
  return number
}
var randomBoolean = function() {
  var truthValue = randomNumber(0,1);
  return truthValue === 1 ? true : false;
}

class User {
 constructor(id, listings, reservations) {
    this.id= id,//increment up by one
    this.userName= 'JimboJones',//find random names
    this.password= 'password',
    this.listings= listings,
    this.reservations= reservations
  }
}

class Reservation {
  constructor(listing_id, start_date, end_date) {
      this.listing_id= null,
      this.start_date= null,
      this.end_date= null
  }
}

class Listing  {
  constructor(listing_id, amenities, comments) {
    
      this.price= randomNumber(100,1000),
      this.listing_id= listing_id,
      this.reserved_dates= [], //tuple of dates i.e [[1/9/18, 1/12/18], ...]
      this.imageURL= [],
      this.summary= 'summary string',
      this.street= 'street address',
      this.city= 'some city',
      this.state= statesArray[randomNumber(0,59)],
      this.rating= randomNumber(1,5), 
      this.private= randomBoolean(), //private home or not
      this.typeHome= homeTypeArray[randomNumber(0,4)], //apartment, home, tent, RV
      this.bedrooms= this.typeHome !== 'tent' && this.typeHome !== 'RV' ? randomNumber(1,8) : 1,
      this.bathrooms= this.bedrooms > 2 ? randomNumber(2, this.bedrooms) : 1,
      this.guests= this.bedrooms * 2,
      this.description= 'this is a place that you can sleep',
      this.amenities= this.amenities;
      this.house_rules= 'we have these rules',
      this.cancellations= 'you must cancel eleven hours beforehand, no more, no less',
      this.lat= 0,    //Lat and Long can be replaced by city state address
      this.lon= 0,
      this.comments= comments
  }
}

class Amenities {
  constructor() {
    this.body= 'we have these amenities...', //might not be necessary. 
    this.wifi= randomBoolean(),
    this.kitchen= randomBoolean(),
    this.parking= randomBoolean(),
    this.pool= randomBoolean(),
    this.gym= randomBoolean()
  }
}
var reviews = ['There were monsters under the bed!', 
              'I would not send my worst enemy here!', 
              'ehh it was fine', 
              'this place was pretty good!', 
              'You wont be able to book this location because i am moving in.'];
class Comment {
  constructor(body) {
    this.body = body,
    this.date= Date.now(); //change this to a random date
  }
}


for(var i = 0; i < 2; i++) {
  var tempListing = new Listing();
  var tempComment = new Comment(reviews[tempListing.rating]);
  var tempAmenities = new Amenities();
  var tempListing = new Listing(i, tempAmenities, tempComment);
  var tempReservation = new Reservation();
  var tempUser = new User(i, tempListing,tempReservation)
  console.log(tempUser)
}