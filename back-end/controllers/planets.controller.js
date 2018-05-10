var Database = require('../libs/database.service');
var Planet = require('../models/planet');

class PlanetsController {
  constructor() {
    this._dbService = new Database();
  }
  createPlanet(name) {
    this._dbService.db.once('open', function() {
      let planet = new Planet();      // create a new instance of the Bear model
      planet.name = name;  // set the bears name (comes from the request)
      planet.id = 0;
      // save the bear and check for errors
      planet.save().then(() => console.log('Planet ' + planet.name + ' created.')).catch();
      // we're connected!
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
