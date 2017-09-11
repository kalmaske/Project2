var orm = require('../config/SeqORM.js');

var asheville = {
	all: function(cb){
		orm.all('listings', function(res){
			cb(res);
		});
	},
	create: function(col, vals, cb){
		orm.create('listings', col, vals, function(res){
			cb(res);
		});
	},
	update: function(objColVals, condition, cb){
		orm.update('listings', objColVals, condition, function(res){
			cb(res);
		});
	}
};

module.exports = asheville; 