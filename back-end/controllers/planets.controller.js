var Database = require('../libs/database.service');
var Planet = require('../models/planet');
var mongoose   = require('mongoose');

class PlanetsController {
  constructor() {
    this._dbService = new Database();
  }
  createPlanet(res, name) {
    this._dbService.db.on('error', console.error.bind(console, 'connection error:'));
    let planet = new Planet({
      _id: new mongoose.Types.ObjectId(),
      name: name,
      location_x: 0,
      location_y: 0,
    });

    planet.name = name;  // set the bears name (comes from the request)
    planet.id = 0;
    // save the bear and check for errors
    planet.save().then(function() {
      console.log('Planet ' + planet.name + ' created.');
      res.status(200).send(planet);
    }
    ).catch();
  }

  getPlanets(res) {
    this._dbService.db.on('error', console.error.bind(console, 'connection error:'));
    // Using query builder
    // No query passed in means "find everything"
    Planet.find((err, planets) => {
        if (err) return res.status(500).send(err)
        res.status(200).send(planets);
    });
  }

  getPlanetById(id) {
    return null;
  }

  getPlanetByLocation(id) {
    return null;
  }

  getPlanetInRange(from, range) {
    return null;
  }
}

module.exports = PlanetsController
