var express = require('express');

var app = express();

app.get('/data', function(req, res, next) {
  res.jsonp([
    {name: 'A'},
    {name: 'B'},
    {name: 'C'}
  ]);
});

app.listen(3000);