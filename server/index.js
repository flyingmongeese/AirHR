const express = require('express');
const app = express();
const path = require('path');
const parser = require('body-parser');

//// CONFIGURING PASSPORT /////
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');
app.use(session({secret: 'flyingMongeese'}));




app.use(parser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

//// Initialize Passport ////
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  // For Evan's homepage
});


app.post('/login', (req, res) => {
  console.log('received request: ', req.body);
  //hello

})

app.get('/listings', (req, res) => {
  // default post
  // 
  res.send(listings);
});

app.post('/', (req, res) => {
  // default post
});

app.post('/', (req, res) => {
  // default post
});

// this is quite a small change
var port = process.env.PORT || 3007;
app.listen(port, () => {
  console.log('FlyingMongeese listening on PORT 3007!');
});



let listings = [

    {
      listing_id: 4,
      reserved_dates: [['1/9/18', '1/20/18']], //tuple of dates i.e [[1/9/18, 1/12/18], ...]
      images: ['https://a0.muscache.com/im/pictures/27140490/43479b34_original.jpg?aki_policy=medium', 'https://a0.muscache.com/im/pictures/27199083/3e99445e_original.jpg?aki_policy=medium'], // array of imageUrls
      Street: '123 Circle St.',
      City: 'San Francisco',
      State: 'CA',
      rating: 4,
      price: '$280 USD per night',
      listingTitle: 'Adorable Garden Gingerbread house',
      private: true, //private home or not
      typeHome: 'home', //apartment, home, tent, RV
      bedrooms: 2,
      bathrooms: 1,
      guests: 4,
      amenities: [{body: null}, //might not be necessary. 
            {wifi: true},
            {kitchen: true},
            {parking: false},
            {pool: false}
            ],
      house_rules: 'No honey badgers allowed please',
      cancellations: 'For cancellations, please notify us 1 week in advance.',
      lat: null,
      lon: null,
      comments: [{user: {id: 2,
                        username: 'Prism Nick'}},
                 {body: 'Perfect place to make prisms!' },
                 {date: '01-01-2018'}]
    },
      {
      listing_id: 7,
      reserved_dates: [['1/9/18', '1/20/18']], //tuple of dates i.e [[1/9/18, 1/12/18], ...]
      images: ['https://a0.muscache.com/im/pictures/3898743/a70e3172_original.jpg?aki_policy=medium', 'https://a0.muscache.com/im/pictures/3898781/e1493b20_original.jpg?aki_policy=medium'], // array of imageUrls
      Street: '123 Circle St.',
      City: 'San Francisco',
      State: 'CA',
      rating: 4,
      price: '$110 USD per night',
      listingTitle: 'In the historical center of Lecce',
      private: true, //private home or not
      typeHome: 'home', //apartment, home, tent, RV
      bedrooms: 2,
      bathrooms: 1,
      guests: 4,
      amenities: [{body: null}, //might not be necessary. 
            {wifi: true},
            {kitchen: true},
            {parking: false},
            {pool: false}
            ],
      house_rules: 'No honey badgers allowed please',
      cancellations: 'For cancellations, please notify us 1 week in advance.',
      lat: null,
      lon: null,
      comments: [{user: {id: 2,
                        username: 'Prism Nick'}},
                 {body: 'Perfect place to make prisms!' },
                 {date: '01-01-2018'}]
    },
    {
      listing_id: 7,
      reserved_dates: [['1/9/18', '1/20/18']], //tuple of dates i.e [[1/9/18, 1/12/18], ...]
      images: ['https://a0.muscache.com/im/pictures/3898743/a70e3172_original.jpg?aki_policy=medium', 'https://a0.muscache.com/im/pictures/3898781/e1493b20_original.jpg?aki_policy=medium'], // array of imageUrls
      Street: '123 Circle St.',
      City: 'San Francisco',
      State: 'CA',
      rating: 4,
      price: '$170 USD per night',
      listingTitle: 'In the historical center of Lecce',
      private: true, //private home or not
      typeHome: 'home', //apartment, home, tent, RV
      bedrooms: 2,
      bathrooms: 1,
      guests: 4,
      amenities: [{body: null}, //might not be necessary. 
            {wifi: true},
            {kitchen: true},
            {parking: false},
            {pool: false}
            ],
      house_rules: 'No honey badgers allowed please',
      cancellations: 'For cancellations, please notify us 1 week in advance.',
      lat: null,
      lon: null,
      comments: [{user: {id: 2,
                        username: 'Prism Nick'}},
                 {body: 'Perfect place to make prisms!' },
                 {date: '01-01-2018'}]
    },
    {
      listing_id: 7,
      reserved_dates: [['1/9/18', '1/20/18']], //tuple of dates i.e [[1/9/18, 1/12/18], ...]
      images: ['https://a0.muscache.com/im/pictures/3898743/a70e3172_original.jpg?aki_policy=medium', 'https://a0.muscache.com/im/pictures/3898781/e1493b20_original.jpg?aki_policy=medium'], // array of imageUrls
      Street: '123 Circle St.',
      City: 'San Francisco',
      State: 'CA',
      rating: 4,
      price: '$115 USD per night',
      listingTitle: 'In the historical center of Lecce',
      private: true, //private home or not
      typeHome: 'home', //apartment, home, tent, RV
      bedrooms: 2,
      bathrooms: 1,
      guests: 4,
      amenities: [{body: null}, //might not be necessary. 
            {wifi: true},
            {kitchen: true},
            {parking: false},
            {pool: false}
            ],
      house_rules: 'No honey badgers allowed please',
      cancellations: 'For cancellations, please notify us 1 week in advance.',
      lat: null,
      lon: null,
      comments: [{user: {id: 2,
                        username: 'Prism Nick'}},
                 {body: 'Perfect place to make prisms!' },
                 {date: '01-01-2018'}]
    }





    ];
