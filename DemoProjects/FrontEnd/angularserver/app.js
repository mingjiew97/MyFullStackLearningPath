var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var employeeController = require('./controllers/employee.controller');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.get("/employees", employeeController.getEmployees);

app.listen(3000);
console.log("server started");