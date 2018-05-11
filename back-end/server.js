var express = require('express');
var router = require('./router');
var fs = require("fs");
var cors = require('cors')

var app = express();

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies
app.use(express.static('./www')); // set PWD
app.use(cors()); // Enable CORS
app.use('/api', router);

// Responds to root GET calls
app.get('/', function (req, res) {
    console.log("[GET] Home");
})

var server = app.listen(8081, function () {

    let host = server.address().address
    let port = server.address().port

    console.log("App listening at http://%s:%s", host, port)
})
