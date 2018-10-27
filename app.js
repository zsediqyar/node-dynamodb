var dotenv = require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const exphand = require('express-handlebars');
const dynamoose = require('dynamoose');

const app = express();

var PORT = 3000;


dynamoose.local('http://localhost:8000');




app.get('/', function(req,res) {
	app.send('estin');
});


app.listen(PORT, function() {
	console.log('The App Started');
});


