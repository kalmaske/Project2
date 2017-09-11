var express = require('express');
var router = express.Router();
var burgers = require('../models/asheville.js');

router.get('/', function (req, res) {
	res.redirect('/listings')
});

router.get('/listings', function (req, res) {
	listings.all(function (data) {
		var hbsObject = {
			listings: data
		};

		console.log(hbsObject);

		res.render('index', hbsObject);
	});
});

router.post('/asheville/create', function (req, res) {
	burgers.create(['name'], [req.body.name], function (data) {
		res.redirect('/')
	});
});

router.put('/asheville/update/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition ', condition);

	asheville.update({
		'name': req.body.name
	}, condition, function (data) {
		res.redirect('/asheville');
	});
});

module.exports = router;