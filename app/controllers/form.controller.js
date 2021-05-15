
const db = require('../config/db.config.js');
const Form = db.form;
 
// FETCH all Data
exports.findAll = (req, res) => {
	Form.findAll().then(form => {
	  // Send all data to Client
	  res.send(form);
	});
};