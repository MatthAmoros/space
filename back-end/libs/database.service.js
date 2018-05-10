var mongoose   = require('mongoose');
var connectionString = require('../specs/mongodb.json')

class DatabaseService {
  constructor() {
    mongoose.connect('mongodb://' + connectionString.user + ':' + connectionString.password + '@'
     + connectionString.host + '/space'); // connect to our database
     this._db = mongoose.connection;
   }

   get db(){
     return this._db;
   }
}

module.exports = DatabaseService;
