const { Pool, Client } = require('pg');
let authentication = require('../server/authentication/authentication.js');
let listings = require('../generatedSampleData.js');
listings = listings.listingsData;

// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'airdnb',
//   password: 'password'
// })

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
})

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

// const client = new Client({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'airdnb',
//   password: 'password'
// })

//comment

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true
})

client.connect();

let createUsers = `CREATE TABLE users (
  id SERIAL,
  username TEXT UNIQUE,
  password TEXT,
  PRIMARY KEY (id)	
)`

let createListings = `CREATE TABLE listings (

  id SERIAL,
  listingTitle TEXT, 
  price NUMERIC,
  images TEXT[],
  summary TEXT,
  street TEXT,
  state TEXT,
  city TEXT,
  reserved_dates DATE[][],
  rating TEXT ARRAY,
  private BOOLEAN,
  typehome TEXT,
  bedrooms INTEGER,
  bathrooms INTEGER,
  description TEXT,
  guests INTEGER,
  wifi BOOLEAN,
  kitchen BOOLEAN,
  parking BOOLEAN,
  pool BOOLEAN,
  gym BOOLEAN,
  house_rules TEXT ARRAY,
  cancellations TEXT,
  lat NUMERIC,
  lon NUMERIC,
  comments TEXT ARRAY,
  PRIMARY KEY (id)

)`

let createReservations = `CREATE TABLE reservations (

  id SERIAL,
  user_id SERIAL references users(id),
  listing_id SERIAL references listings(id),
  days_reserved DATE ARRAY

)`

let createSession = `
CREATE TABLE "session" (
  "sid" varchar NOT NULL COLLATE "default",
	"sess" json NOT NULL,
	"expire" timestamp(6) NOT NULL
)
WITH (OIDS=FALSE);
ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;
`




client.query('DROP TABLE IF EXISTS reservations');
client.query('DROP TABLE IF EXISTS users');
client.query('DROP TABLE IF EXISTS listings');
client.query('DROP TABLE IF EXISTS session');


client.query(createUsers, (err, res) => {
  if (err) {
    console.log(err);
  }
})


client.query(createListings, (err, res) => {
  if (err) {
    console.log(err);
  }
})

client.query(createSession, (err, res) => {
  if (err) {
    console.error(err);
  }
})

client.query(createReservations, (err, res) => {
  if (err) {
    console.log(err);
  } 
})


function buildStatement (insert, rows) {
  const params = []
  const chunks = []
  rows.forEach(row => {
    const valueClause = []
    Object.keys(row).forEach(p => {
      params.push(row[p])
      valueClause.push('$' + params.length)
    })
    chunks.push('(' + valueClause.join(', ') + ')')
  })
  return {
    text: insert + chunks.join(', '),
    values: params
  }
}

client.query(buildStatement(`INSERT INTO listings(images, street, state, city, rating, price, listingTitle, private, typehome, bedrooms, bathrooms,
 guests, description, wifi, kitchen, parking, pool, gym, house_rules, cancellations, lat, lon, comments) VALUES `, listings), (err, res) => {
	if (err) {
	  console.log(err);
	}
})


let getAllListings = function(callback) {
  var queryStr = `SELECT * FROM listings LIMIT 20`;
  client.query(queryStr, (err, res) => {
  	if (err) {
  	  callback(err, null);
  	} else {
  	  callback(null, res);
  	  // client.end()
  	}
  })
}

let getListingsByCity = function(city, callback) {
  var queryStr = `SELECT * FROM listings WHERE city LIKE '${city.toUpperCase()}'`
  client.query(queryStr, (err, res) => {
  	if (err) {
  	  callback(err, null);
  	} else {
  	  callback(null, res);
  	}
  })
}

let saveListing = function(params, callback) {
  // saves a new listing to the DB
  // expects params to be an obj with the required params
  // console.log(params);
  var queryStr = `INSERT INTO listings(images, street, state, city, rating, price, listingTitle, private, typehome, bedrooms, bathrooms,
 	guests, description, wifi, kitchen, parking, pool, gym, cancellations, lat, lon) VALUES ('${params.images}')`
  // var queryStr = `INSERT INTO listings VALUES (${results.name}, ${results.price}, ${results.images}, ${results.summary}, ${results.street}, ${results.city})`
  // client.query(queryStr, (err, res) => {
  // 	if (err) {
  // 	  callback(err, null);
  // 	} else {
  //     callback(null, res);
  // 	}
  // });
}

let getReservationsByUser = function(username, callback) {
  // input: username
  // output: array of reservations currently made by that user
}

let registerUser = (req, callback) => {
  authentication.validateEntry(req, (error, result) => {
    if (error) {
      callback(error, null);
    } else {
      authentication.hashPassword(req.body.password, (error, hash) => {
        if (error) {
          callback(error, null);
        } else {
          var params = [req.body.username, hash];
          var queryStr = "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id"
          client.query(queryStr, params, (error, result, fields) => {
            if (error) {
              if (error.code === '23505') {
                var duplicateError = ['Username already exists'];
              }
              callback(duplicateError, null)
            } else {
              callback(null, result.rows[0].id);
            }
          })
        }

      })

    }
  });
}

let findUser = (username, callback) => {
  var queryStr = "SELECT id, password FROM users WHERE users.username=$1";
  console.log(username);

  client.query(queryStr, [username], (error, result, fields) => {
    console.log('here');
    if (error) {
      callback(error, null);
    } else {
      callback(null, result);
    }
  })
}




module.exports.getAllListings = getAllListings;
module.exports.saveListing = saveListing;
module.exports.getListingsByCity = getListingsByCity;
module.exports.registerUser = registerUser;
module.exports.pool = pool;
module.exports.findUser = findUser;



// var parse = require('pg-connection-string').parse;
// var config = parse('postgres://localhost/airdnb');