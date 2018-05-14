var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

/*
  Documentation at : http://mongoosejs.com/docs/populate.html
*/

var PlanetSchema   = new Schema({
    _id: Schema.Types.ObjectId, //ID Type supported by MongoDb
    location: {
      x: Number,
      y: Number
    },
    type: [{ type: Schema.Types.ObjectId, ref: 'PlanetType' }],
    name: { type: String, unique: true, uppercase: true },
    stats: {
      space: Number,
      energy: Number,
      defense: Number
    },
    owner: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = mongoose.model('Planet', PlanetSchema);
