const { Pool, Client } = require('pg');
const moment = require('moment');
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

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true
})

client.connect();

client.query('DROP TABLE IF EXISTS users');
// client.query('DROP TABLE IF EXISTS reservation');
// client.query('DROP TABLE IF EXISTS listings');
// client.query('DROP TABLE IF EXISTS session');

let createUsers = `CREATE TABLE users (
  id SERIAL,
  username TEXT UNIQUE,
  password TEXT,
  email TEXT,
  phone TEXT,
  PRIMARY KEY (id)
)`

let createListings = `CREATE TABLE IF NOT EXISTS listings (
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

let createReservations = `CREATE TABLE IF NOT EXISTS reservations (
  id SERIAL,
  user_id INTEGER,
  listing_id INTEGER,
  days_reserved DATE ARRAY
)`

let createSession = `
CREATE TABLE IF NOT EXISTS "session" (
  "sid" varchar NOT NULL COLLATE "default",
	"sess" json NOT NULL,
  "expire" timestamp(6) NOT NULL
)
WITH (OIDS=FALSE);
ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;
`

// 


// client.query('DROP TABLE IF EXISTS users');
// client.query('DROP TABLE IF EXISTS listings');
// client.query('DROP TABLE IF EXISTS session');


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
  // console.log('here');
  console.log(queryStr);
  client.query(queryStr, (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  })
}

let updateReservedDates = function(userId, listingId, newFromDate, newToDate, callback) {

  var queryStr1 = `SELECT reserved_dates FROM listings WHERE id = ${listingId}`;
  client.query(queryStr1, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      var clash = false;
      let alreadyReserved = res.rows[0].reserved_dates;
      if (alreadyReserved !== null) { 
        
        for (var i = 0; i < alreadyReserved.length; i = i + 2) {
          if (moment(newFromDate).isBetween(alreadyReserved[i], alreadyReserved[i + 1]) || moment(newToDate).isBetween(alreadyReserved[i], alreadyReserved[i + 1])) {
            clash = true;
          }
        }
      }
      // console.log('POST COMPARISON', clash)

      if (clash) {
        callback(null, 'clash');
      } else {
        var queryStr = `UPDATE listings SET reserved_dates = reserved_dates || '{${newFromDate}, ${newToDate}}' WHERE id = ${listingId}`;
        client.query(queryStr, (err, res) => {
          if (err) {
            callback(err, null);
          } else {
            // update reservations TABLE with a new reservation, listingId/userId
            var nestedQuery1 = `INSERT INTO reservations(user_id, listing_id, days_reserved) VALUES (${userId}, ${listingId}, '{${newFromDate}, ${newToDate}}')`
            console.log('NESTED QUERY IS', nestedQuery1)
            client.query(nestedQuery1, (err, res) => {
              if (err) {
                callback(err, null);
              } else {
                callback(null, res);    
              }
            })
            
          }
        });
      } 

    }
  })

  
}

let saveListing = function(params, callback) {
  // saves a new listing to the DB
  // expects params to be an obj with the required params
  console.log('PARAMS ARE', params);

  var queryStr = `INSERT INTO listings (images, street, state, city, price, listingTitle, typehome, bedrooms, bathrooms,
  guests, description, cancellations) VALUES ('{${params.mainurl}, ${params.secondaryurl}}', 
  '${params.address}', '${params.state}', '${params.city.toUpperCase()}', ${params.price}, '${params.mainTitle}', '${params.typeOfHome}', ${params.bedrooms}, ${params.bathrooms}, 
  ${params.guests}, '${params.description}', '${params.cancellations}')`
  //
  console.log('QUERY STRING IS', queryStr);
  client.query(queryStr, (err, res) => {
   if (err) {
     callback(err, null);
   } else {
     callback(null, res);
   }
  });
}

let getReservationsByUser = function(userId, callback) {
  // input: username
  // output: array of reservations currently made by that user

  // get all listing_id's/dates for reservations currently made by that user
  // return all listing properties/dates for that user 
  let queryStr = `SELECT * from listings WHERE id IN (SELECT listing_id FROM reservations WHERE user_id = ${userId})`;
  client.query(queryStr, (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  })
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

  client.query(queryStr, [username], (error, result, fields) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, result);
    }
  })
}

let getUserProfile = (user, callback) => {
  var queryStr = `SELECT (id, username, email, phone) FROM users WHERE id=${user}`;
  
  client.query(queryStr, (error, result, fields) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, result);
    }
  })
}

let updateUserProfile = (data, callback) => {
  // var queryStr = `UPDATE users SET (${data[1]}) = ($3) WHERE users.id = $1`;

  var columns = '(';
  var values = '(';
  for (var i = 0; i < data[1].length; i++) {
    columns += `${data[1][i]}`;
    values += `'${data[2][i]}'`;

    if (i === data[1].length - 1) {
      columns += ')';
      values += ')';
    } else {
      columns += ', ';
      values += ', ';
    }
  }

  var queryStr = `UPDATE users SET ${columns} = ${values} WHERE id = ${data[0]}`;

  console.log('query', queryStr)


  client.query(queryStr, (error, result, fields) => {
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
module.exports.getUserProfile = getUserProfile;
module.exports.updateReservedDates = updateReservedDates;
module.exports.getReservationsByUser = getReservationsByUser;
module.exports.updateUserProfile = updateUserProfile;



// var parse = require('pg-connection-string').parse;
// var config = parse('postgres://localhost/airdnb');