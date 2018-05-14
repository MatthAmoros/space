var Database = require('../libs/database.service');
var opt = require('../libs/utils');
var User = require('../models/user');
var mongoose   = require('mongoose');

class UsersController {
  constructor(db) {
    this._dbService = db;
  }

  createUser(res, name, token, options) {
    let provider = opt(options, 'provider', 'Google');

    //First, looks if name alreay exists
    User.findOne({name: name}, (err, user) => {
      if(res != undefined) {
          if (err) {
             return res.status(500).send(err)
           }
           if (!user) {

             //Nothing found, create User
             let user = new User({
               _id: new mongoose.Types.ObjectId(),
               name: name,
               level: 1,
               externalToken: token,
               tokenProvider: provider
             });

             //Save new user
             user.save().then(function() {
               console.log('User ' + user.name + ' saved.');
               if(res != undefined)
                 res.status(200).send(user);
             });
           }
           else
            //Already exists
            res.status(401).send('');
        }
    });
  }

  getUserById(res, id) {
    User.findOne({_id: id}, (err, user) => {
      if(res != undefined) {
          if (err) return res.status(500).send(err)
          res.status(200).send(user);
        }
    });
  }

  getUserByName(res, name) {
    User.findOne({name: name}, (err, user) => {
      if(res != undefined) {
          if (err) return res.status(500).send(err)
          res.status(200).send(user);
        }
    });
  }

}

module.exports = UsersController
