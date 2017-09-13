
module.exports = function(sequelize, DataTypes) {
	var asheville = sequelize.define("asheville", {
	  property: {
		type: DataTypes.INTEGER,
		allowNull: false,
		validate: {
		  len: [1]
		}
	  },
	  name: {
		type: DataTypes.STRING,
		allowNull: false,
		len: [1]
	  },
	  host_id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		len:[1]
	  },
	  host_name:{
		  type:DataTypes.STRING,
		  allowNull: false,
		  len :[1]
	  },
	  
      neighbourhood:{
		type: DataTypes.INTEGER,
		allowNull:false,
		len:[5]
    },
    room_type:{
		type: DataTypes.STRING,
		allowNull:false,
		len:[1]
    },
    room_type:{
		type: DataTypes.INTEGER,
		allowNull:false,
		len:[1]
    },
    availability_365:{
		type: DataTypes.INTEGER,
		allowNull:false,
		len:[1]
    }

    
	  

	});
	
	return asheville;
  };

