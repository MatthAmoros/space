var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

/*
  Documentation at : http://mongoosejs.com/docs/populate.html
*/

var PlanetSchema   = new Schema({
    _id: Schema.Types.ObjectId, //ID Type supported by MongoDb
    location_x: Number,
    location_y: Number,
    type: [{ type: Schema.Types.ObjectId, ref: 'PlanetType' }],
    name: String,
    owner: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Planet', PlanetSchema);
