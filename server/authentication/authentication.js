var sampleUsers = require('./auth-sampleData.js');

var findByUser(username) {
  for (var i = 0; i < sampleUsers.users.length; i++) {
    if (sampleUsers.users[i][username] === username) {
      return sampleUsers.users[i];
    }
  }

  return [];
}