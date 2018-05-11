var mongoose   = require('mongoose');
var connectionString = require('../specs/mongodb.json')

class DatabaseService {
  constructor() {
    //Open MongoDB connection
    mongoose.connect(
    'mongodb://'
     + connectionString.user + ':'
     + connectionString.password + '@'
     + connectionString.host
     + '/space');

     var db = mongoose.connection;

     //Promise, detects connection open
     db.once('open', function() {
       console.log("Connected !");
     });

     //Handle connection close on process shutdown
     process.on('SIGINT', function(){
       mongoose.connection.close(function(){
         console.log("Mongoose default connection is disconnected due to application termination");
         process.exit(0);
        });
      });

     this._db = db;
   }

   get db() {
     return this._db;
   }
}

module.exports = DatabaseService;
