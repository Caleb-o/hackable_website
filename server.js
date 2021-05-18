// Set all our modules
var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');

// Port to listen on
const PORT = 3000;

var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '!Password1',
	database : 'user_data'
});


connection.connect(function(err)
{
    if (err) throw err;

    connection.query("SELECT * FROM login", function (err, result, fields) {
        if (err) throw err;
      }); 
});

// Handles our requests
var app = express();

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// Display our html
app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/landing', function(request, response) {
	response.sendFile(path.join(__dirname + '/landing.html'));
});

app.post('/auth', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;

	if (username && password) {
		connection.query("SELECT * FROM login WHERE username = '" + username + "' AND password = '" + password + "'", [], function(error, results, fields) {
			
			if (results && results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;

				response.redirect('/landing');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

app.get('/landing', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});

app.listen(PORT);