var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");
var app = express();
var db = require("./models");

app.use(express.static('public'));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


//Serve static content from public

//app.use(express.static(process.cwd() + './public'));



app.use(bodyParser.json());
//app.use(express.static("public"));
app.use(bodyParser.urlencoded({
	extended: false
}))
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/controller.js');
app.use('/', routes);

// // Requiring our routes
// require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);

var PORT = process.env.PORT || 8008;
db.sequelize.sync({force:true}).then(function() {
    app.listen(PORT, function() {
      console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT);
    });
  });