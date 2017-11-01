const express = require('express');
const router = express.Router();
const models = require('../models').db;

router.get('/', function(req, res){
	models.Flight.findAll().then(function(flights){
		res.json(flights);
	});
});

module.exports = router;