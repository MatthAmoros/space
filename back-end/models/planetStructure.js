var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

/*
  Documentation at : http://mongoosejs.com/docs/populate.html
*/

var PlanetStructureSchema   = new Schema({
    _id: Schema.Types.ObjectId, //ID Type supported by MongoDb
    type: [{ type: Schema.Types.ObjectId, ref: 'StructureType' }], //Structure type
    planet_location_id: [{ type: Schema.Types.ObjectId, ref: 'Planet' }], //Reference to planet.id
    level: Number
});

module.exports = mongoose.model('PlanetStructure', PlanetStructureSchema);
