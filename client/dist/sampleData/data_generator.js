
var homeTypeArray = ['apartment', 'home', 'tent', 'RV']
var statesAbbrev = [ 'AL',
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

var reviews = ['There were monsters under the bed!', 
              'I would not send my worst enemy here!', 
              'ehh it was fine', 
              'this place was pretty good!', 
              'You wont be able to book this location because I am moving in.'];

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

var randomNumber = function(min, max) {
  var number = Math.round((max-min) * Math.random())
  return number
}
var randomBoolean = function() {
  var truthValue = randomNumber(0,1);
  return truthValue === 1 ? true : false;
}
// images, street, state, city, rating, price, listingTitle, private, typehome, bedrooms, bathrooms, guests, description, wifi, kitchen, parking, pool, gym, cancellations, lat, lon
class Listing  {
  constructor() {
    
    
       //tuple of dates i.e [[1/9/18, 1/12/18], ...]
      this.images= [],
      this.Street= 'street address',
      this.State= statesAbbrev[randomNumber(0,59)],
      this.City= randomNumber(0,1) === 0 ? 'Middleton' : 'Shiresville',
      this.rating= randomNumber(1,5), 
      this.price= randomNumber(100,1000),
      this.listingTitle = 'Next to the most wonderful place on Earth!',
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
      //this.summary= 'summary string',                           //summary= 'we have these amenities...', //might not be necessary. 
                                         //gym= randomBoolean();
      
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
var arr= [];


module.exports.Generator = function(array) {

    // console.log('this is the array: ', array)
  for(var i = 1; i < 200; i++) {
    var imageURL = 'sampleData/images/image-' + (randomNumber(0, 29)).toString()+'.jpg';
    var imageURL2 = 'sampleData/images/image-' + (randomNumber(0, 29)).toString()+'.jpg';
    var tempListing = new Listing(i);
    tempListing.images.push(imageURL, imageURL2)
    //console.log('this is the listing: ', tempListing)
    // console.log(',')
    array.push(tempListing)
  }

}


