var mongoose = require('mongoose');
var Question = mongoose.model("Question");
var Answer = mongoose.model("Answer");

module.exports = {
    all: function(req, res){
        Question.find({}).populate('comments').exec(function(err, questions){
            if(err){
                res.json(err);
            } else {
                res.json(questions);
            }
        });
    },

    one: function(req, res){
        Question.findOne({_id: req.params.id}).populate('comments').exec(function(err, recipe){
            if(err){
                res.json(err);
            } else {
                res.json(recipe);
            }
        });
    },
    
    create: function(req, res){
        var question = new question(req.body);
        question.save(function(err, question){
            if(err){
                res.json(err);
            } else {
                res.json(question);
            }
        });
    },

    answer: function(req, res){
        Question.findOne({_id:req.paramms.id}), function(err, question){
            var answer = new Answer(req.body);
            answer._question = question._id;
            answer.save(function(err){
                question.answers.push(answer);
                question.save(function(err){
                    if(err){
                        console.log(err);
                    } else {
                        res.json(question);
                    }
                });
            });
        }
    }
}