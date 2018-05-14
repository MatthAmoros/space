var mongoose   = require('mongoose');
var connectionString = require('../specs/mongodb.json');

var StructureType = require('../models/structureType');

class DatabaseService {
  constructor() {
    this._vocabulary = [];

    //Open MongoDB connection
    mongoose.connect(
    'mongodb://'
     + connectionString.user + ':'
     + connectionString.password + '@'
     + connectionString.host
     + '/space');

     var db = mongoose.connection;
     var databaseService = this;

     //Promise, detects connection open
     db.once('open', function() {
       console.log("Connected !");
       //Connected, load vocabulary
       databaseService.loadVocabulary();
     });

     //Handle connection close on process shutdown
     process.on('SIGINT', function(){
       mongoose.connection.close(function(){
         console.log("Mongoose default connection is disconnected due to application termination");
         process.exit(0);
        });
      });

     //Set constants
     this._systemUserId = mongoose.Types.ObjectId('000000000000000000000000');

     //Expose db
     this._db = db;
   }
   //Load vocabulary (business constants) from database
   loadVocabulary() {
     StructureType.find((err, structureTypes) => {
       if(err) console.log("VOC >> [ERR] StructureTypes not found.");
       this._vocabulary['structureTypes'] = structureTypes;
       //console.log(structureTypes);
       console.log("VOC >> [INFO] StructureTypes loaded.");
     });
   }

   //Return db object (previously initialized)
   get db() {
     return this._db;
   }

   //Return system user id
   get systemUserId() {
     return this._systemUserId;
   }

   //Return vocabulary
   get structureTypes() {
      return this._vocabulary['structureTypes'];
   }

   getStructureType(type) {
     var found = false;

     for(var i = 0; i < this._vocabulary['structureTypes'].length; i++) {
         if (this._vocabulary['structureTypes'][i].name == type) {
             return this._vocabulary['structureTypes'][i];
             break;
         }
     }

     return null;
   }
}

module.exports = DatabaseService;
