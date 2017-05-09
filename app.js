
/**
 * Created by jasonnatividad on 5/7/17.
 */


var express = require('express');


var path = require('path');


var app = express();


var port = 3000;

// app.use setups middleware, used by express first.
app.use(express.static('public'));
app.use(express.static('src/views'));





// request - information coming from the browser
// response - is what we deal with



// ROUTES


app.get('/', function(req,res) {

    res.sendFile(path.join(__dirname, 'src/views/signUp/index.html'));

});


app.get('/login', function(req,res) {

    res.sendFile(path.join(__dirname, 'src/views/login/login.html'));

});


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


