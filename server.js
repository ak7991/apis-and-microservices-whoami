const express = require('express');

const app = express();

app.use(express.static('public'));

// include ALL routes
const routes = require('./routes/index');
app.use('/api', routes);

app.get('/', function(request, response) {
  response.send('please append /api/whoami in URL to get IP');
});

// listen for requests :)
const port = 3000;
const listener = app.listen( port, () => console.log('Your app is listening on port ' + port) );
