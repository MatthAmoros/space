var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PlanetSchema   = new Schema({
    id: Number,
    location_x: Number,
    location_y: Number,
    name: String
});

module.exports = mongoose.model('Planet', PlanetSchema);
