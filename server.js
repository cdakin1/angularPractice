var express = require('express');
// var path = require('path')
var app = express();

app.use(express.static('public'));
app.get('/', function(req, res) {
  res.render(__dirname + 'public/index.html');
});

app.listen(8080, function() {
  console.log('listening on 3000');
});
