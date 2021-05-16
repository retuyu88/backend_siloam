const models = require('../models')
const hospital = models.Hospital_list
// FETCH all hospital Data
exports.index = (req, res) => {
	hospital.findAll().then(data => {
	  // Send all data to Client
	  res.send({
        message: "success",
        data
    })
	});
};

