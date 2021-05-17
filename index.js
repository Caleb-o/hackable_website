// Setup button
window.onload = function()
{
    document.getElementById("login").onclick = function()
    {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        //alert("user: " + username + ", password: " + password);
        login_to_database(username, password);
    }
}

// Require modules
const express = require('express');
const app = express();
const mssql = require('mssql');

// Database config
const config = {
    user: 'root',
    password: 'Password1',
    server: 'localhost',
    database: 'user_data',
};

// Create the connection
var connection = mssql.createConnection({
    host: config.server,
    user: config.user,
    password: config.password,
    database: config.database
});
connection.connect();

global.db = connection;

function login_to_database(user, pass) 
{
    var message = '';
    
    // Assume POST
    var sql = "SELECT * FROM login WHERE username='" + user + "' and password='" + pass +"'";
    
    db.query(sql, function(err, results)
    {
        alert("Doing query");

        if (results.length > 0)
        {
            console.log(results);
            window.location.href = "/landing.html";
        }
    });
}