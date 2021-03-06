var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/', function (req, res) {
	res.redirect('/asheville')
});

router.get('/asheville', function (req, res) {
	db.ashevilles.findAll({})
		.then(function (data) {
			var hbsObject = {
				ashevilles: data
			};

			console.log(hbsObject);

			res.render('index', hbsObject);
		});
});

router.get('/home', function (req, res) {
	
	
	db.ashevilles.findAll({})
		.then(function (data) {
			var hbsObject = {
				user : req.user,
				ashevilles: data
			};

			console.log(hbsObject);

			res.render('home', hbsObject);
		});
});

router.post('/asheville/create', function (req, res) {
	var listing = {
		
			  name: req.body.name,
			    neighbourhood: req.body.neighbourhood,
			    room_type: req.body.room_type,
			    price: req.body.price,
			    minimum_nights: req.body.minimum_nights,
			    availability_365: req.body.availability_365
	};
	console.log(listing);
	
	  db.ashevilles
	    .create(listing)
	    .then(function() {
	      res.redirect("/");
	    })
	    .catch(function(err) {
	      console.error(err);
	    });
	 });



router.put('/asheville/update/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition ', condition);

	db.ashevilles.update({
		name: req.body.name
	}, condition, function (data) {
		res.redirect('/asheville');
	});
});



module.exports = router;