var SeqORM = require('../config/SeqORM.js');

var asheville = {
	all: function(cb){
		SeqORM.all('listings', function(res){
			cb(res);
		});
	},
	create: function(col, vals, cb){
		SeqORM.create('listings', col, vals, function(res){
			cb(res);
		});


		
	},
	update: function(objColVals, condition, cb){
		SeqORM.update('listings', objColVals, condition, function(res){
			cb(res);
		});
	}
};

module.exports = asheville; 