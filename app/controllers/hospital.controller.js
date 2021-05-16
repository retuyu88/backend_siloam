const models = require('../models')
const hospital = models.Hospital_list
// FETCH all hospital Data
exports.index = (req, res) => {
	hospital.findAll().then(form => {
	  // Send all data to Client
	  res.send(form);
	});
};

