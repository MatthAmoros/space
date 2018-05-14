var express    = require('express');        // call express
//Business specifics
var TaskFactory = require('./libs/task.factory');
//Planet
var PlanetsController = require('./controllers/planets.controller');
var UsersController = require('./controllers/users.controller');
var Database = require('./libs/database.service');
var User = require('./models/user');
var Planet = require('./models/planet');

var taskFactory = new TaskFactory();
var db = new Database();
var planetsController = new PlanetsController(db);
var usersController = new UsersController(db);

var router = express.Router();

//All requests
router.use(function(req, res, next) {
    //console.log('Received request.');
    next(); //forwarding
});

/*
* ===============================
*           [User]
* ===============================
*/
router.route('/users/:name/:token')
    // get planets
    .get(function(req, res) {

    })
    // create planets
    .post(function(req, res) {
      //Sign in
      usersController.createUser(res, req.params.name, req.params.token);
    });

/*
* ===============================
*           [Planet]
* ===============================
*/

router.route('/planets/name/:name')
    // get planets
    .get(function(req, res) {
      planetsController.getPlanetByName(res, req.params.name);
    })
    // update planets
    .put(function(req, res) {

    })
    // create planets
    .post(function(req, res) {
      console.log('Creating planet ' + req.params.name);
      planetsController.createPlanet(res, req.params.name, []);
    });

router.route('/planets/:id')
    // get planets
    .get(function(req, res) {
      planetsController.getPlanetById(res, req.params.id);
    })
    // update planets
    .put(function(req, res) {

    })
    // create planets
    .post(function(req, res) {

    });

router.route('/planets/location/:x/:y')
    // get planets
    .get(function(req, res) {
      planetsController.getPlanetByLocation(res, parseInt(req.params.x), parseInt(req.params.y));
    })

router.route('/planets/:id/owner/:userId')
    // get planets
    .get(function(req, res) {
      planetsController.getPlanetById(res, req.params.id);
    })
    // update planets
    .put(function(req, res) {

    })
    // create planets
    .post(function(req, res) {
      planetsController.claimPlanet(res, req.params.id, req.params.userId);
    });

router.route('/planets/owner/:userId')
    // get planets
    .get(function(req, res) {
      planetsController.getPlanetByUserId(res, req.params.userId);
    })
    // update planets
    .put(function(req, res) {

    })

router.route('/planets/:id/structures')
    // get planets
    .get(function(req, res) {
      planetsController.getPlanetStructures(res, req.params.id);
    })

router.route('/planets/:id/structures/:structureType')
    // get planets
    .get(function(req, res) {
      planetsController.getPlanetByUserId(res, req.params.userId);
    })
    // update planets
    .put(function(req, res) {

    })
    // create planets
    .post(function(req, res) {
      planetsController.buildStructure(res, req.params.id, req.params.structureType);
    });

router.route('/planets')
    // get planets
    .get(function(req, res) {
      planetsController.getPlanets(res);
    })
    // create planets
    .post(function(req, res) {

    });

router.route('/actions/:type/:param_1')
    // get planets
    .get(function(req, res) {
      res.json({ message: 'Getting planet ' + req.params.id });
    })
    // update planets
    .put(function(req, res) {

    })
    // create planets
    .post(function(req, res) {

    });

module.exports = router;
