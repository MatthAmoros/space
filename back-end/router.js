var express    = require('express');        // call express
//Business specifics
var TaskFactory = require('./libs/task.factory');
//Planet
var PlanetsController = require('./controllers/planets.controller');
var Planet = require('./models/planet');

var taskFactory = new TaskFactory();
var planetsController = new PlanetsController();


var router = express.Router();

//All requests
router.use(function(req, res, next) {
    //console.log('Received request.');
    next(); //forwarding
});

router.route('/planets/:id')
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

router.route('/planets')
    // get planets
    .get(function(req, res) {
      res.json({ message: 'Getting planets '});
    })
    // create planets
    .post(function(req, res) {
      console.log('Creating planet...');
      planetsController.createPlanet('test');
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
