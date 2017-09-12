
// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/members");
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function() {
      res.redirect(307, "/api/login");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

};



// var db = require("../models");


// module.exports = function(app) {

// //   app.get("/api/listings/", function(req, res) {
// //     db.listings.findAll({})
// //     .then(function(dblistings) {
// //       res.json(dblistings);
// //     });
// //   });

//   app.get("/api/listingss/name/:name", function(req, res) {
//     db.listings.findAll({
//       where: {
//         name: req.params.name
//       }
//     })
//     .then(function(dblistings) {
//       res.json(dblistings);
//     });
//   });

//   app.get("/api/listingss/:id", function(req, res) {
//     db.listings.findOne({
//       where: {
//         id: req.params.id
//       }
//     })
//     .then(function(dblistings) {
//       res.json(dblistings);
//     });
//   });

//   app.listings("/api/listingss", function(req, res) {
//     console.log(req.body);
//     db.listings.create({
//       name: req.body.name,
//       neighbourhood: req.body.neighbourhood,
//       room_type: req.body.room_type,
//       price: req.params.price,
//       minimum_nights: req.params.minimum_nights,
//       availability_365 : req.params.availability_365

//     })
//     .then(function(dblistings) {
//       res.json(dblistings);
//     });
//   });

//   app.delete("/api/listingss/:name", function(req, res) {
//     db.listings.destroy({
//       where: {
//         name: req.params.name
//       }
//     })
//     .then(function(dblistings) {
//       res.json(dblistings);
//     });
//   });

//   app.put("/api/listingss", function(req, res) {
//     db.listings.update(req.body,
//       {
//         where: {
//           name: req.body.name
//         }
//       })
//     .then(function(dblistings) {
//       res.json(dblistings);
//     });
//   });
// };
// 
