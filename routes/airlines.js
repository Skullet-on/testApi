const express = require('express');
const router = express.Router();
const models = require('../models').db;

router.get('/', function(req, res){
	models.Airline.findAll().then(function(airlines){
		res.json(airlines);
	});
});

module.exports = router;