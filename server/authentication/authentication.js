var passport = require('passport');
var sampleUsers = require('./auth-sampleData.js');

var findByUser = function(username) {
  for (var i = 0; i < sampleUsers.users.length; i++) {
    if (sampleUsers.users[i]['username'] === username) {
      return sampleUsers.users[i];
    }
  }

  return [];
}

var verifyLogin = function(loginInfo, callback) {
  var user = findByUser(loginInfo.username);
  if (user.length === 0) {
    callback(2, null);
  } else {
    if (user.password === loginInfo.password) {
      callback(null, user.id);
    } else {
      console.log('wrong password');
    }
  }
};

module.exports = {
  verifyLogin: verifyLogin
}