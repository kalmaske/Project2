

var db = require("../models");


module.exports = function(app) {

//   app.get("/api/listings/", function(req, res) {
//     db.listings.findAll({})
//     .then(function(dblistings) {
//       res.json(dblistings);
//     });
//   });

  app.get("/api/listingss/name/:name", function(req, res) {
    db.listings.findAll({
      where: {
        name: req.params.name
      }
    })
    .then(function(dblistings) {
      res.json(dblistings);
    });
  });

  app.get("/api/listingss/:id", function(req, res) {
    db.listings.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(function(dblistings) {
      res.json(dblistings);
    });
  });

  app.listings("/api/listingss", function(req, res) {
    console.log(req.body);
    db.listings.create({
      name: req.body.name,
      neighbourhood: req.body.neighbourhood,
      room_type: req.body.room_type,
      price: req.params.price,
      minimum_nights: req.params.minimum_nights,
      availability_365 : req.params.availability_365

    })
    .then(function(dblistings) {
      res.json(dblistings);
    });
  });

  app.delete("/api/listingss/:name", function(req, res) {
    db.listings.destroy({
      where: {
        name: req.params.name
      }
    })
    .then(function(dblistings) {
      res.json(dblistings);
    });
  });

  app.put("/api/listingss", function(req, res) {
    db.listings.update(req.body,
      {
        where: {
          name: req.body.name
        }
      })
    .then(function(dblistings) {
      res.json(dblistings);
    });
  });
};