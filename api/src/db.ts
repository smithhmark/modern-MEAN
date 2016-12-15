export var mongoose = require('mongoose');

//See mongoose docs re. Promises
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/social2", function(err) {
  if (err) {
    console.log("error connecting to mongo");
    throw err;
  }
  console.log('mongo connected')
});
/*
*/
