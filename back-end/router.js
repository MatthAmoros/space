var express    = require('express');        // call express
//Business specifics
var TaskFactory = require('./libs/task.factory');
//Planet
var PlanetsController = require('./controllers/planets.controller');
var UsersController = require('./controllers/users.controller');
var User = require('./models/user');
var Planet = require('./models/planet');

var taskFactory = new TaskFactory();
var planetsController = new PlanetsController();
var usersController = new UsersController();

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
      planetsController.createPlanet(res, req.params.name);
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

router.route('/planets/:id/structures')
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
