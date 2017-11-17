var recipe = require('../controllers/recipes.js');

var path = require("path");

module.exports = function(app){
    
    app.get("/all", function(req, res){
        question.all(req, res);
    });

    app.get("/one/:id", function(req, res){
        question.one(req, res);
    });

    app.post("/questions", function(req, res){
        question.create(req, res);
    });

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/index.html"));
    });
}