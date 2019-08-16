const getClientIp = require('../js/header-parser').getClientIp;

var express = require('express');
var router = express.Router();

router.get('/whoami', (req, res, next) => {

	// Respond with a JSON with device Info.
	res.send(getClientInfo(req));
	res.end();
});

router.get('/', (req, res, next) => {
	res.send("append /whoami to the url to get device info from request header");
	res.end();
});

module.exports = router;