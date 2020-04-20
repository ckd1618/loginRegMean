var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session');

// app.use(express.static(path.join(__dirname, '/client/static')));
app.use(express.static( __dirname + '/public/dist/public' ));
app.use(bodyParser.json());

app.use(session({
    secret: 'amptLive314159',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000
    }
}))

mongoose.connect('mongodb://localhost/apmt', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000, function () {
    console.log("listening on port 8000");
})

//NOTE: IN ORDER FOR IT TO PROPERLY DEPLOY AT LOCALHOST:8000 YOU MUST RUN THE FOLLOWING TERMINAL COMMANDS:
//FRONTEND INSIDE OF PUBLIC: ng build --watch (not ng serve, this will deploy at localhost:4200 and the session cookies will be lost)
//BACKEND INSIDE OF YOUR SERVER.JS FOLDER: nodemon server.js