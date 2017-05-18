
/**
 * Created by jasonnatividad on 5/7/17.
 */


var express = require('express');

var path = require('path');

var app = express();

var port = process.env.PORT || 5000;


// MY SQL SETTINGS

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'secret',
    database: 'next_db'

});

var q = 'SELECT CURDATE()';

connection.query(q, function (error, results, fields) {
   if (error) throw error;
    console.log(results);

});

connection.end();

// app.use setups middleware, used by express first.
app.use(express.static('public'));
app.use(express.static('src/views'));

// templating engine code
app.set('views', './src/views');
app.set('view engine', 'ejs');

// end templating



// routes
app.get('/', function (req, res) {
    res.render('signup', {title: 'Sign Up NeXT->', list: ['a','b']});
});



app.get('/login', function(req,res) {

    res.render('login', {title: 'Login NeXT->'});

});


app.get('/dashboard', function(req,res) {

    res.render('dashboard', {title: 'Dashboard NeXT->',
                            associateName: 'Jason Natividad',
                            position: 'Medical Expense Tech',
                            nav: [{
                                    Link: '/Overview',
                                    Text: 'Overview'}, {
                                    Link: '/Test',
                                    Text: 'Text'}]});
                                // DON'T FORGET TO ADD LINKS ABOVE
});



// request - information coming from the browser
// response - is what we deal with



// ROUTES


// app.get('/', function(req,res) {
//
//     res.sendFile(path.join(__dirname, 'src/views/signUp/index.html'));
//
// });





app.get('/profile', function(req,res) {

    res.sendFile(path.join(__dirname, 'src/views/login/login.html'));

});


app.listen(port, function(err) {

    console.log('Running server on port ' + port);

});

//var path = require('path');
//
//var open = require('open');








//app.get('/', function(req, res){
//
//    res.sendFile(path.join(__dirname, '../src/index.html'))
//});

//
//app.listen(port, function(err){
//
//    if (err) {
//        console.log(err);
//    } else {
//        open('http://localhost:' + port);
//    }
//
//
//});


