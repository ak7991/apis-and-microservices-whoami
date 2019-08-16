const getClientIp = require('../js/header-parser').getClientIp;

var express = require('express');
var router = express.Router();

router.get('/whoami', (req, res, next) => {
	const getClientIp = req.params.date;

	// Respond with a JSON parseable string with date values.
	res.send(getClientIp(req));
	res.end();
});

router.get('/', (req, res, next) => {

	// Respond with a JSON parseable string with date values.
	res.send(getClientIp(req));
	res.end();
});

module.exports = router;