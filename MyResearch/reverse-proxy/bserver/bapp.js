var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
app.get('/api/name', function(req, res, next) {
  res.send('Bob from ' + PORT);
});
app.listen(PORT);