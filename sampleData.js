var data = [
    {
    id: 1,
    userName: 'FlyingMongeese',
    password: 'flysouth',
    listings: [{
      price: 133,
      listing_id: 1,
      reserved_dates: [], //tuple of dates i.e [[1/9/18, 1/12/18], ...]
      imageURL: ['https://static.pexels.com/photos/261426/pexels-photo-261426.jpeg','https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'],
      summary: "Grand and Cozy SF Studio",
      street: '123 Circle St.',
      city: 'San Francisco',
      state: 'CA',
      rating: 4,
      private: true, //private home or not
      typeHome: 'Entire Home', //apartment, home, tent, RV
      bedrooms: 2,
      bathrooms: 1,
      guests: 4,
      description: "Come enjoy our large studio in San Francisco's charming and convenient Bernal Heights! You'll enjoy your own cozy and private lodging with a romantic gas fireplace, wood and stone floors and artistic decor. You will be close to world class vies of San Francisco and it's beautiful bay. Bus lines are close by and parking is very easy!",
      amenities: [{body: null}, //might not be necessary. 
            {wifi: true},
            {kitchen: true},
            {parking: false},
            {pool: false}
            ],
      house_rules: ['No honey badgers allowed please','No jumping jacks after 9', 'Please clean up after yourselfs', 'Hide food from bears'],
      cancellations: 'For cancellations, please notify us 1 week in advance.',
      lat: null,
      lon: null,
      comments: [{user: {id: 2,
                        username: 'Prism Nick'}},
                 {body: 'Perfect place to make prisms!' },
                 {date: '01-01-2018'}]
      }]
    },

    {
    id: 2,
    userName: 'Stephen',
    password: 'Curry',
    listings: [{
      price: 155
      listing_id: 2,
      reserved_dates: [], //tuple of dates i.e [[1/9/18, 1/12/18], ...]
      imageURL: [],
      summary: 'Big Baller Brand of LA'
      street: '234 Circle St.',
      city: 'Los Angeles',
      state: 'CA',
      rating: 4,
      private: true, //private home or not
      typeHome: 'studio', //apartment, home, tent, RV
      bedrooms: 2,
      bathrooms: 1,
      guests: 3,
      description: "Come enjoy our large studio in LA's charming and convenient Korea Town neighborhood! You'll enjoy your own cozy and private lodging with a romantic gas fireplace, wood and stone floors and artistic decor. You will be close to world class views of Hollywood and it's beautiful bay."
      amenities: [{body: null}, //might not be necessary. 
            {wifi: false},
            {kitchen: true,
            {parking: false},
            {pool: false},
            {gym: true}],
      house_rules: ['No honey badgers allowed please', 'no smoking', 'no drinking', 'curfew at 10'],
      cancellations: 'For cancellations, please notify us 1 week in advance.',
      lat: null,
      lon: null,
      comments: [{user: {id: 2,
                        username: 'Prism Nick'}},
                 {body: 'Perfect place to make prisms!' },
                 {date: '01-01-2018'}]
    }]
  },

  {
    id: 3,
    userName: 'Prism Nick',
    password: 'prisms',
    listings: [{
      price: 4000
      listing_id: 3,
      reserved_dates: [], //tuple of dates i.e [[1/9/18, 1/12/18], ...]
      imageURL: [],
      summary: 'Sydney, Palace of Disney',
      street: '2845 Prismatic Ave.',
      city: 'Oakland',
      state: 'CA',
      rating: 9, 
      private: false, //private home or not
      typeHome: 'apartment', //apartment, home, tent, RV
      bedrooms: 6,
      bathrooms: 3,
      guests: 5,
      description: String,
      amenities: [{body: null}, //might not be necessary. 
                  {wifi: true},
                  {kitchen: true},
                  {parking: true},
                  {pool: true} ,
                  {gym: false}]
      house_rules: ['Please do not touch my prism collection. They are very special to me.', 'RAWRRRRRRRR', 'How much does a wood chuck, chuck', 'If a wood chuck could chuck wood?'],
      cancellations: 'Cancel...and I will charge you.',
      lat: null,
      lon: null,
      comments: [{user: {id: 2,
                        username: 'Prism Nick'}},
                 {body: 'Perfect place to make prisms!' },
                 {date: '01-01-2018'}]
    }]
  },

  {
    id: 4,
    userName: 'D-Dizzle',
    password: 'dizzledazzle',

    listings: [{
      listing_id: 3,
      reserved_dates: [], //tuple of dates i.e [[1/9/18, 1/12/18], ...]
      imageURL: [],
      Street: '5489 Mission Blvd.',
      City: 'San Francisco',
      State: 'CA',
      rating: 7, 
      private: true, //private home or not
      typeHome: 'apartment', //apartment, home, tent, RV
      bedrooms: 3,
      bathrooms: 2,
      guests: 6,
      amenities: [{body: null}, //might not be necessary. 
                  {wifi: true},
                  {kitchen: true},
                  {parking: false},
                  {pool: false} ],
      house_rules: 'Don\'t die in my house please',
      cancellations: 'Just don\'t',
      lat: null,
      lon: null,
      comments: [{user: {id: 1,
                         username: 'FlyingMongeese'}},
                 {body: 'Partied here last week with Prism Nick. Amazing.' },
                 {date: '01-01-2018'}]
    }]
  }
];

export default data;