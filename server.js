var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require('path');

app.use(express.static(path.join(__dirname, "./static")));
app.use(express.static(path.join(__dirname, "./public/dist")));
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(9999, function(){
    console.log("listening on port 9999");
})