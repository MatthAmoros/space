var Database = require('../libs/database.service');
var opt = require('../libs/utils');
var Planet = require('../models/planet');
var mongoose   = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

class PlanetsController {
  constructor() {
    this._dbService = new Database();
  }
  createPlanet(res, name, options) {

    let location_x = opt(options, 'location_x', 0);
    let location_y = opt(options, 'location_y', 0);
    let owner = opt(options, 'owner', '0');

    let planet = new Planet({
      _id: new mongoose.Types.ObjectId(),
      name: name,
      location_x: location_x,
      location_y: location_y,
      owner: owner
    });

    planet.save().then(function() {
      console.log('Planet ' + planet.name + ' created.');
      if(res != undefined)
        res.status(200).send(planet);
    });
  }

  /* Getters */
  getPlanets(res) {
    Planet.find((err, planets) => {
      if(res != undefined) {
        if (err) return res.status(500).send(err)
        res.status(200).send(planets);
      }
    });
  }

  getPlanetById(res, id) {
    Planet.findOne({_id: id}, (err, planet) => {
      if(res != undefined) {
          if (err) return res.status(500).send(err)
          res.status(200).send(planet);
        }
    });
  }

  getPlanetByName(res, name) {
    Planet.findOne({name: name}, (err, planet) => {
      if(res != undefined) {
          if (err) return res.status(500).send(err)
          res.status(200).send(planet);
        }
    });
  }

  getPlanetByLocation(res, location_x, location_y) {
    Planet.findOne({location_x: location_x, location_y: location_y}, (err, planets) => {
      if(res != undefined) {
          if (err) return res.status(500).send(err)
          res.status(200).send(planets);
        }
    });
  }

  getPlanetByUserId(res, userId) {
    Planet.find({owner: userId}, (err, planets) => {
      if(res != undefined) {
          if (err) return res.status(500).send(err)
          res.status(200).send(planets);
        }
    });
  }

  getPlanetInRange(from, range) {
    return null;
  }

  /* Updaters */
  claimPlanet(res, id, userId) {
    Planet.findOne({_id: id}, (err, planet) => {
      if(res != undefined) {
          if (err) return res.status(500).send(err)

          console.log(planet.owner);

          if(!planet.owner)
            planet.owner = userId;
          else {
            return res.status(500).send('Already claimed');
          }

          return res.status(200).send(planet);
        }
    });
  }
}

module.exports = PlanetsController
