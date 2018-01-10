const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
//-----------------
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
  console.log('connected');
})

let userSchema = mongoose.Schema({
  author: String, 			//owner.login
  id: Number, 				  //owner.id
  repo_name: String, 		//name
  html_url: String, 		//url
  forks: Number, 			  //forks_count
  watchers: Number, 		//watcher_count
  stars: Number, 			  //stargazer_count
  updated_at: String, 	//updated_at
  created_at: String, 	//created_at
});