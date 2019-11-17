var express = require('express');

price = require('./calcPrice.js');

var app = express();

//use different pieces of code and inject them into different places
app.set('port', process.env.PORT || 5000)
    .use(express.static(__dirname + '/info'))
    .set('views', __dirname + '/views')
    .set('view engine', 'ejs')
    .get('/', function(req,res){
        res.sendFile('form.html', {root: __dirname + "/info"});
    })
    .get('/views', price.calcPrice)
    .listen(app.get('port'), function(){
        console.log('Listening on Port: ' + app.get('port'));
    });
