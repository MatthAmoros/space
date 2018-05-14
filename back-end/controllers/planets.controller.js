var Database = require('../libs/database.service');
var opt = require('../libs/utils');
var mongoose   = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

var Planet = require('../models/planet');
var PlanetStructure = require('../models/planetStructure');
var StructureType = require('../models/structureType');

class PlanetsController {
  constructor(db) {
    this._dbService = db;
  }

  generatePlanetStats(PLANET_TEMPLATE) {
    let high, low;

    switch (PLANET_TEMPLATE) {
      case 'SMALL':
      high = 300;
      low = 100;
        break;
      case 'MEDIUM':
      high = 600;
      low = 300;
        break;
      case 'BIG':
      high = 1000;
      low = 600;
        break;
      default:
      high = 1000;
      low = 100;
        break;
    }

    let seed = Math.round(Math.random() * (high - low) + low);

    return { space: seed * 2,  energy: seed, defense: 0 };
  }

  generatePlanetLocation() {
    //To calculte orbite, we get time difference between first release date and now
    let originDate = new Date("5/10/2018");
    let currentDate = new Date();

    let timeDiff = Math.abs(currentDate.getTime() - originDate.getTime());
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    let position = Math.round(Math.random() * (1 - 8) + 1);
    console.log(position);
    var x,y;

    switch (position) {
      case 1:
        x = diffDays;
        y = 0;
        break;
      case 2:
        x = diffDays;
        y = diffDays;
        break;
      case 3:
        x = 0;
        y = diffDays;
        break;
      case 4:
        x = -diffDays;
        y = diffDays;
        break;
      case 5:
        x = -diffDays;
        y = 0;
        break;
      case 6:
        x = -diffDays;
        y = -diffDays;
        break;
      case 7:
        x = 0;
        y = -diffDays;
        break;
      case 8:
        x = diffDays;
        y = -diffDays;
        break;
      default:
        x = diffDays;
        y = -diffDays;
        break;
    }

    return { x: x, y: y};
  }

  createPlanet(resHttp, name, options) {
    let owner = opt(options, 'owner', this._dbService._systemUserId);

    let planet = new Planet({
      _id: new mongoose.Types.ObjectId(),
      name: name,
      location: this.generatePlanetLocation(),
      stats: this.generatePlanetStats(),
      owner: owner
    });

    console.log(planet.location);

    planet.save().then(function(res) {
      console.log("Planet " + planet.name + " created.");
      if(res != undefined)
        return resHttp.status(200).send(planet);
    }).catch(function(err) {
      if(err.code == 11000) //Duplicated key
        return resHttp.status(500).send("Planet's name already used.");
      return resHttp.status(500).send(err);
    });
  }

  /* Getters */
  //Get all planets
  getPlanets(resHttp) {
    Planet.find((err, planets) => {
      if(resHttp != undefined) {
        if (err) return resHttp.status(500).send(err);
        return resHttp.status(200).send(planets);
      }
    });
  }

  //Get by Id
  getPlanetById(resHttp, id) {
    Planet.findOne({_id: id}, (err, planet) => {
      if(res != undefined) {
          if (err) return resHttp.status(500).send(err);
          return resHttp.status(200).send(planet);
        }
    });
  }

  //Get by name
  getPlanetByName(res, name) {
    Planet.findOne({name: name}, (err, planet) => {
      if(res != undefined) {
          if (err) return res.status(500).send(err);
          res.status(200).send(planet);
        }
    });
  }

  //Getter spatials (by location)
  getPlanetByLocation(res, location_x, location_y) {
    Planet.findOne()
    .where('location.x').equals(location_x)
    .where('location.y').equals(location_y)
    .exec((err, planets) => {
      if(res != undefined) {
          if (err) return res.status(500).send(err);
          res.status(200).send(planets);
        }
    });
  }

  //Getter spatials (by range)
  getPlanetInRange(res, from, range) {
    Planet.find()
    .where('location.x').gt(from.x - range).lt(from.x + range)
    .where('location.y').gt(from.y - range).lt(from.y + range)
    .exec((err, planets) => {
      if(res != undefined) {
          if (err) return res.status(500).send(err);
          res.status(200).send(planets);
        }
    });
  }

  getPlanetByUserId(res, userId) {
    Planet.find({owner: userId}, (err, planets) => {
      if(res != undefined) {
          if (err) return res.status(500).send(err);
          res.status(200).send(planets);
        }
    });
  }



  getPlanetStructures(resHttp, planetId) {
    PlanetStructure.find({planet_id: mongoose.Types.ObjectId(planetId)}, (err, structures) => {
      if (err) return resHttp.status(500).send(err);
      else return resHttp.status(200).send(structures);
    });
  }

  /* Updaters */
  claimPlanet(res, id, userId) {
    Planet.findOne({_id: id}, (err, planet) => {
      if(res != undefined) {
          if (err) return res.status(500).send(err);

          //Check if it's already owned
          if(planet.owner[0].equals(this._dbService._systemUserId)) {
            //Update owner
            planet.owner = userId;
            //Commit changes
            Planet.findOneAndUpdate({_id: planet.id},
             planet, { upsert: true }, function(err, res) {
               if (err) return res.status(500).send(err);
               console.log(planet.name + " claimed by " + userId);
            });
          }
          else {
            return res.status(500).send("Already claimed");
          }
          return res.status(200).send(planet);
        }
    });
  }

  buildStructure(resHttp, planetId, structureType) {
    //Validate type
    var structureTypeObject = this._dbService.getStructureType(structureType);
    if(structureTypeObject == null) {
      //Return available list of structures
      return resHttp.status(500).send(this._dbService.structureTypes);
    }

    //Update planet
    Planet.findOneAndUpdate({_id : planetId},
      {$inc : {'stats.energy' : structureTypeObject.stats.baseEnergy - structureTypeObject.cost.baseEnergyCost}}
    ).then(function(res) {
      console.log(res);
    });

    var structure = new PlanetStructure({
      _id: new mongoose.Types.ObjectId(),
      type: structureTypeObject._id, //Reference type
      planet_id: planetId, //Reference planet
      level: 1
    });

    structure.save().then(function(res) {
      console.log("Structure " + structure.structureTypeId + " built on planet " + planetId);
      if(res != undefined)
        return resHttp.status(200).send(structure);
    });
  }
}

module.exports = PlanetsController
