var express = require('express');
var app = express();

app.use(express.static('public'));

var options = {
  root: __dirname
};

app.get('/', function (req, res) {
  res.sendFile('./public/views/index.html',options);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});