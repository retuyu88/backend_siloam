const models = require('../models')
const form = models.FormData
// FETCH all Data
exports.index = (req, res) => {
	form.findAll().then(form => {
	  // Send all data to Client
	  res.send(form);
	});
};

exports.store = (req, res) => {
	form.create({ 
		full_name: req.body.full_name,
		gender: req.body.gender,
		dob: req.body.dob,
		email: req.body.email,
		phone: req.body.phone,
		visited_hosp: req.body.visited_hosp,
		pcr_antigen: req.body.pcr_antigen,
		fever_history: req.body.fever_history,
		breathing_difficulty: req.body.breathing_difficulty,
		cough_history: req.body.cough_history,
		runny_nose: req.body.runny_nose,
		losing_smell: req.body.losing_smell,
		losing_taste: req.body.losing_taste,
		body_aches: req.body.body_aches,
		vomit: req.body.vomit,
	  })
		.then(function (data) {
			res.send({
				message: "success",
				data
			})
		});
};