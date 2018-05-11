var mongoose   = require('mongoose');
var connectionString = require('../specs/mongodb.json')

class DatabaseService {
  constructor() {
    mongoose.connect('mongodb://' + connectionString.user + ':' + connectionString.password + '@'
     + connectionString.host + '/space'); // connect to our database

     var db = mongoose.connection;
     db.once('open', function() {
       console.log("Connected !");
     });
     this._db = db;
   }

   get db(){
     return this._db;
   }
}

module.exports = DatabaseService;
