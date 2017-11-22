var question = require('../controllers/questions.js');

var path = require("path");

module.exports = function(app){
    
    app.get("/all", function(req, res){
        question.all(req, res);
    });

    app.get("/one/:id", function(req, res){
        question.one(req, res);
    });

    app.post("/question", function(req, res){
        question.create(req, res);
    });

    app.post("/question/:id", function(req, res){
        question.answer(req, res);
    });

    app.put("/question/:id/like", function(req, res){
        question.update(req, res);
    });

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/index.html"));
    });
}