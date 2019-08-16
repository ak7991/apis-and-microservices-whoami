/*
 * Return JSON with request headers.
 * @param {request} req A request object.
 * @return {JSON} headerObj Contains IP, language and software info  
 */
 function getClientInfo(req) {

	let headerObj = {};

	// IP address
	headerObj["ipAddress"] = req.header('x-forwarded-for');
	// Language
	headerObj["language"] = req.header('Accept-Language');
	// Software used
	headerObj["software"] = req.header('User-Agent');

  if (headerObj["ipAddress"]) {
    // 'x-forwarded-for' header may return multiple IP addresses in
    // the format: "client IP, proxy 1 IP, proxy 2 IP" so take the
    // the first one
    headerObj["ipAddress"] = headerObj["ipAddress"].split(',')[0];
  }
  if (!headerObj["ipAddress"]) {
    // If request was not forwarded
    headerObj["ipAddress"] = req.connection.remoteAddress;
  }
  return headerObj;
};

module.exports.getClientInfo = getClientInfo;