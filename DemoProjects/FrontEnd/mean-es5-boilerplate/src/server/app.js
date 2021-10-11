var express = require('express');
var cors = require('cors');
var userController = require('./controllers/user.controller');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(cors({
  origin: 'http://localhost:4000'
}));

app.get('/users', userController.getUsers);

app.listen(process.env.PORT || 3000 ,function(){
  console.log("up and running on port "+process.env.PORT);
});