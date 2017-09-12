var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')

var app = express();

//Serve static content from public
app.use(express.static(process.cwd() + './public'));

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

var port = process.env.PORT || 8008;
app.listen(port);
