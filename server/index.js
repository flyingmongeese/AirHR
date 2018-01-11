const express = require('express');
const app = express();
const path = require('path');
const parser = require('body-parser');
const dataGenerator = require('../client/dist/sampleData/data_generator.js');
const authentication = require('./authentication/authentication.js');
const db = require('../database/pgIndex.js');
const expressValidator = require('express-validator');
//console.log('data generator func: ', dataGenerator)
//// CONFIGURING PASSPORT /////
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const pgSessions = require('connect-pg-simple') (session);
app.use(session({ 
  secret: 'flyingMongeese',
  resave: false,
  saveUninitialized: false,
  store: new pgSessions({
    pool: db.pool
  }),
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy((username, password, done) => {
  console.log('username: ', username);
  console.log('password: ', password);
  db.findUser(username, (error, result) => {
    console.log(result);
    if (error) {
      done(error);
    } else {
      if (result.rows.length === 0) {
        done(null, false);
      } else {
        authentication.verifyPassword(password, result.rows[0].password, (error, pwCheck) => {
          if (error) {
            console.error(error);
          } else {
            if (pwCheck === true) {
              return done(null, {userid: result.rows[0].id})
            } else {
              return done(null, false);
            }
          }
        })
      }
    }
  })
}))


app.use(parser.json());
app.use(expressValidator());
app.use(express.static(path.join(__dirname, '../client/dist')));



app.get('/', (req, res) => {
  // For Evan's homepage
});


app.post('/login', (req, res) => {
  console.log('received request: ', req.body);
  passport.authenticate('local', function(error, user, info) {
    if (error) {
      console.error(error);
      res.status(500).end();
    } else if (!user) {
      console.log(user);
      res.status(409).send('Username or Password not found, please try again');
    } else {
      req.logIn(user, (error) => {
        if (error) {
          res.status(500).end();
        } else {
          res.status(201).end();
        }
      })
    }
  })(req, res);
});

app.get('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.send(200).end();
})

app.post('/registration', (req, res) => {
  console.log('received request: ', req.body);
  db.registerUser(req, (error, result) => {
    if (error) {
      console.error(error);
      res.status(409).json(error);
    } else {
      req.login(result, (error) => {
        res.status(201).json(result);
      });
    }
  })
});

app.get('/listings', (req, res) => {
  // default post
  // 
  db.getAllListings(function(err, results) {
    if (err) {
      console.log(err);
    } else {

      res.send(results);
    }
  })
  // res.send(listings);
});

app.get('/listings/:cityName', (req, res) => {
  console.log('in get req', req.params.cityName)
  db.getListingsByCity(req.params.cityName, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  })
});

  // res.send(req.params.cityName)
app.get('/authenticate', (req, res) => {
  if (req.isAuthenticated()) {
    res.status(200).json({loggedin: true});
  } else {
    res.status(200).json({loggedin: false});
  }
})


app.post('/listings', (req, res) => {
  // default post

});


//// USER SERIALIZATION PROCESS ////
passport.serializeUser(function(user_id, done) {
  done(null, user_id);
});

passport.deserializeUser(function(user_id, done) {
  done(null, user_id);
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
      images: ['https://a0.muscache.com/im/pictures/27140490/43479b34_original.jpg?aki_policy=xx_large', 'https://a0.muscache.com/im/pictures/27199083/3e99445e_original.jpg?aki_policy=xx_large'], // array of imageUrls
      Street: '123 Circle St.',
      City: 'San Francisco',
      State: 'CA',
      rating: 4,
      price: '$280 per night',
      listingTitle: 'Adorable Gingerbread House',
      private: true, //private home or not
      typeHome: 'home', //apartment, home, tent, RV
      description: "Come enjoy our large studio in San Francisco's charming and convenient Bernal Heights! You'll enjoy your own cozy and private lodging with a romantic gas fireplace, wood and stone floors and artistic decor. You will be close to world class vies of San Francisco and it's beautiful bay. Bus lines are close by and parking is very easy!",
      bedrooms: 3,
      bathrooms: 2,
      guests: 5,
      amenities: [{body: null}, //might not be necessary. 
            {wifi: true},
            {kitchen: true},
            {parking: false},
            {pool: false},
            {gym: false}
            ],
      house_rules: ['No honey badgers allowed please', 'please refrain to jumping jacks at night', 'please do not play basketball in the house', 'no blow horns please'],
      cancellations: 'For cancellations, please notify us 1 week in advance.',
      lat: null,
      lon: null,
      comments: [{user: [ 
                        {id: 2,
                        username: 'Prism Nick'}
                        ],
                 body: "Perfect place to make prisms all day everyday! My name is Nick-Deeeeeeezy and this is my crib. Come enjoy our large studio in San Francisco's charming and convenient Bernal Heights! You'll enjoy your own cozy and private lodging",
                 date: '01-01-2018',
                 imageURL: 'https://i.pinimg.com/736x/37/f3/c4/37f3c436af086e2f835304592899713f--create-an-avatar-flat-style.jpg'
                 }]
    },
      {
  listing_id: 199,
  reserved_dates: [],
  images: [ '../sampleData/images/image-0.jpg' ],
  Street: 'street address',
  State: 'PR',
  City: 'Middleton',
  rating: 1,
  price: '797 USD per night',
  listingTitle: 'Next to the most wonderful place on Earth!',
  private: true,
  typeHome: 'RV',
  bedrooms: 1,
  bathrooms: 1,
  guests: 2,
  description: 'this is a place that you can sleep',
  amenities: 
   [ { wifi: true },
     { kitchen: false },
     { parking: true },
     { pool: false },
     { gym: true } ],
  house_rules: ['don\'t break them', 'don\'t break them', 'don\'t break them'],
  cancellations: 'you must inform by post',
  lat: null,
  lon: null,
  comments: 
   [ { users: 'Derrick',
       body: 'I would not send my worst enemy here!',
       date: 'Tue May 14 2013 10:42:51 GMT-0700 (PDT)',
       imageURL: 'https://i.pinimg.com/736x/37/f3/c4/37f3c436af086e2f835304592899713f--create-an-avatar-flat-style.jpg' } ] },


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
                        {date: '01-01-2018'},
                        {imageURL: 'https://imgur.com/a/5DvdN'}
                        ]
    }
  ];

dataGenerator.Generator(listings);