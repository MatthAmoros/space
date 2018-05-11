var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

/*
  Documentation at : http://mongoosejs.com/docs/populate.html
*/

var StructureTypeSchema   = new Schema({
    _id: Schema.Types.ObjectId, //ID Type supported by MongoDb
    name: String
});

module.exports = mongoose.model('StructureType', StructureTypeSchema);
