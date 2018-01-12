
const StatesAndCities = require('./ArrayLibrary.js').statesAndCities;

var reviews = ['There were monsters under the bed!', 
              'I would not send my worst enemy here!', 
              'ehh it was fine', 
              'this place was pretty good!', 
              'You wont be able to book this location because I am moving in.'];

var homeTypeArray = ['apartment', 'home', 'tent', 'RV']

var randomNumber = function(min, max) {
  var number = Math.round((max-min) * Math.random())
  return number
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
  var where = ['In', 'Next to', 'Near', 'Adjacent to', 'Close by']
  var description = ['historic', 'lively', 'fun', 'wicked', 'wild', 'natural']
  var area = ['district', 'neighborhood', 'region']
  city = city[0] + city.slice(1).toLowerCase()
  return `${where[rn(0, where.length- 1)]} the ${description[rn(0, description.length - 1)]} ${area[rn(0, area.length - 1)]} of ${city}` 
}

class Listing  {
  constructor(listing_id) {
    
      this.listing_id= listing_id,
      this.reserved_dates= [], //tuple of dates i.e [[1/9/18, 1/12/18], ...]
      this.images= [],
      this.Street= randomAddress(),
      this.State= randomState()
      this.City= randomCity(this.State)
      this.rating= randomNumber(1,5), 
      this.price= randomNumber(100,1000).toString() + ' USD per night',
      this.listingTitle = listingSummary(this.City),
      this.private= randomBoolean(),
      this.typeHome= homeTypeArray[randomNumber(0,3)], //apartment, home, tent, RV
      this.bedrooms= this.typeHome !== 'tent' && this.typeHome !== 'RV' ? randomNumber(1,8) : 1,
      this.bathrooms= this.bedrooms > 2 ? randomNumber(2, this.bedrooms) : 1,
      this.guests= this.bedrooms * 2,
      this.description= 'Welcome to our home!',
      this.amenities =
                        [
                          {'wifi': randomBoolean()},
                          {'kitchen': randomBoolean()},
                          {'parking': randomBoolean()},
                          {'pool': randomBoolean()},
                          {'gym': randomBoolean()}
                        ]                                //summary= 'we have these amenities...', //might not be necessary. 
                                         //gym= randomBoolean();
      this.house_rules= [`don't break them`],
      this.cancellations= 'you must inform by post',
      this.lat= null,    //Lat and Long can be replaced by city state address
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
  for(var i = 1; i < 3; i++) {
    var image1 = 'sampleData/images/image-' + (randomNumber(0, 29)).toString() + '.jpg';
    var image2 = 'sampleData/images/image-' + (randomNumber(0, 29)).toString() + '.jpg';
    var tempListing = new Listing(i);
    tempListing.images.push(image1, image2)
    array.push(tempListing)
  }
}