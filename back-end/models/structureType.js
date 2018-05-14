var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

/*
  Documentation at : http://mongoosejs.com/docs/populate.html
*/

var StructureTypeSchema   = new Schema({
    _id: Schema.Types.ObjectId, //ID Type supported by MongoDb
    name: String,
    stats: {
      baseAttack: Number,
      baseDefense: Number,
      baseEnergy: Number  //> 0 Generate, < 0 Consume
    },
    cost: {
      baseMetalCost: Number,
      baseEnergyCost: Number,
      baseSpaceCost: Number
    }
});

module.exports = mongoose.model('StructureType', StructureTypeSchema);
