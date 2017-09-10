var orm = require('../config/SeqORM.js');

var asheville = {
	all: function(cb){
		orm.all('asheville', function(res){
			cb(res);
		});
	},
	create: function(col, vals, cb){
		orm.create('asheville', col, vals, function(res){
			cb(res);
		});
	},
	update: function(objColVals, condition, cb){
		orm.update('asheville', objColVals, condition, function(res){
			cb(res);
		});
	}
};

module.exports = asheville; 