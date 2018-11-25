var express = require('express');
var compression = require('compression');
var path = require('path');
var app = express();

const SERVER_PORT = process.argv.slice(2)[0] || 8082;

app.use(compression());
app.use(express.static('public'));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(SERVER_PORT, () => {
  console.log('you are running server on port => ', SERVER_PORT)
});