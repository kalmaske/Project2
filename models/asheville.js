module.exports = function (sequelize, DataTypes) {
	var ashevilles = sequelize.define("ashevilles", {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [5]
			}
		},
		neighbourhood: {
			type: DataTypes.INTEGER,
			allowNull: false,
			// len: [1]
		},
		price: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			// len: [1]
		},
		room_type: {
			type: DataTypes.STRING,
			// allowNull: false,
			len: [1]
		},
		minimum_nights: {
			type: DataTypes.INTEGER,
			allowNull: false,
			// len: [1]
		},

		availability_365: {
			type: DataTypes.INTEGER,
			allowNull: false,
			// len: [1]
		}




	});

	return ashevilles;
};