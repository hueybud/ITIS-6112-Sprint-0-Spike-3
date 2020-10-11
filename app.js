var express = require('express');
var app = express();

app.set('view engine', 'ejs');

var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "itis6112"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

var helloWorld = 'Hello World';

app.listen('5000');

app.get('/getUsers', function(req, res){
    con.query("SELECT * FROM USERS", function (err, result, fields){
        if (err) throw err;
        console.log(result);
        res.send(result);
        //res.render('page', {queryResults: result, helloWorld: helloWorld});
    })
});

function helloWorld() {
    return 'Hello World';
}

module.exports.helloWorld =  helloWorld;
