var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

/*
  Documentation at : http://mongoosejs.com/docs/populate.html
*/

var UserSchema   = new Schema({
    _id: Schema.Types.ObjectId, //ID Type supported by MongoDb
    name: String,
    level: Number,
    externalToken: String,
    tokenProvider: String    
});

module.exports = mongoose.model('User', UserSchema);
