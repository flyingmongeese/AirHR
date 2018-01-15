//GENERATES FAKE DATA TO TEST DATABASE

const StatesAndCities = require('./ArrayLibrary.js').statesAndCities;

var reviews = ['There were monsters under the bed!', 
              'I would not send my worst enemy here!', 
              'ehh it was fine', 
              'this place was pretty good!', 
              'You wont be able to book this location because I am moving in.'];

var homeTypeArray = ['Apartment', 'Private Home', 'Tent', 'RV']

var randomNumber = function(min, max) {
  var number = Math.ceil((max-min) * Math.random())
  return number
}

var rating = function() {
  var ratingArr = [];
  var rating = randomNumber(1,5);
  for(var i = 0; i <= rating; i++) {
    ratingArr.push('*')
  }
  return ratingArr; 
}

var randomBoolean = function() {
  var truthValue = randomNumber(0,1);
  return truthValue === 1 ? true : false;
}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

var randomState = function() {
  var stateAbbrev = Object.keys(StatesAndCities);
  var randomState = stateAbbrev[randomNumber(0, stateAbbrev.length - 1)]
  return randomState
}

var randomCity = function(State) {
  var randomCity = StatesAndCities[State][randomNumber(0, StatesAndCities[State].length - 1)];
  return randomCity
}
var randomAddress = function() {
  var num = randomNumber(10, 100) * 3
  var streetNames = ['Main St.', 'Broadway', '2nd st.', 'Lucky Landy Ln.', 'Prospect cr.', '5th Av.', 'Skyway', 'Honeyrun rd.']
  return num.toString() +' ' + streetNames[randomNumber(0, streetNames.length - 1)];
}

var listingSummary = function(city) {
  var rn = randomNumber
  var where = ['In', 'Next to', 'Near', 'Close by']
  var description = ['historic', 'lively', 'fun', 'wicked', 'wild', 'natural']
  var area = ['district', 'town', 'region']
  city = city[0] + city.slice(1).toLowerCase()
  return `${where[rn(0, where.length- 1)]} the ${description[rn(0, description.length - 1)]} ${area[rn(0, area.length - 1)]} of ${city}` 
}

// images, street, state, city, rating, price, listingTitle, private, typehome, bedrooms, bathrooms, guests, description, wifi, kitchen, parking, pool, gym, cancellations, lat, lon
class Listing  {
  constructor() {
       //tuple of dates i.e [[1/9/18, 1/12/18], ...]
      this.images= [],
      this.Street= 'street address',
      this.State= randomState(),
      this.City= randomCity(this.State),
      this.rating= rating(), 
      this.price= randomNumber(100,1000),
      this.listingTitle = listingSummary(this.City),
      this.private= randomBoolean(), //private home or not
      this.typeHome= homeTypeArray[randomNumber(0,3)], //apartment, home, tent, RV
      this.bedrooms= this.typeHome !== 'tent' && this.typeHome !== 'RV' ? randomNumber(1,8) : 1,
      this.bathrooms= this.bedrooms > 2 ? randomNumber(2, this.bedrooms) : 1,
      this.guests= this.bedrooms * 2,
      this.description= 'this is a place that you can sleep',
      this.wifi = randomBoolean();
      this.kitchen = randomBoolean();
      this.parking = randomBoolean();
      this.pool = randomBoolean();
      this.gym = randomBoolean();
      this.house_rules = ['No honey badgers allowed please', 'please refrain to jumping jacks at night', 'please do not play basketball in the house', 'no blow horns please']
      this.cancellations= 'you must inform by post',
      this.lat= null,
      this.lon= null,
      this.comments= [
                      {'users': [
                                  {'id': 2,
                                  'username': 'name'}
                                ],
                      'body': reviews[this.rating],
                      'date': (randomDate(new Date(2012, 0, 1), new Date()).toString()),
                      'imageURL': 'https://i.pinimg.com/736x/37/f3/c4/37f3c436af086e2f835304592899713f--create-an-avatar-flat-style.jpg'
                      }
                    ]             
  }
}
module.exports.Generator = function(array) {
  for(var i = 1; i <= 50; i++) {
    var imageURL = 'sampleData/images/image-' + (randomNumber(0, 29)).toString()+'.jpg';
    var imageURL2 = 'sampleData/images/image-' + (randomNumber(0, 29)).toString()+'.jpg';
    var tempListing = new Listing(i);
    tempListing.images.push(imageURL, imageURL2)
    array.push(tempListing)
  }
}