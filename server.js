const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const user = require('./routes/user.route');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jwtauth');

const PORT = 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/checking', function(req, res, next){
    res.json({
        "Tutorial": "Welcome to the Node express JWT Tutorial"
    });
});



app.use('/user', user);

app.listen(PORT, function(){
    console.log('Server is running on Port',PORT);
});
