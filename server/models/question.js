var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var AnswerSchema = mongoose.Schema({
    user:{type:String, required:[true, "Please enter name"]},
    text:{type:String, required:[true, "Please enter your answer"]},
    details: {type:String},
    likes:{type:Number},
    _question: {type: Schema.Types.ObjectId, ref:'Question'}
}, {timestamps:true});

mongoose.model("Answer", AnswerSchema);

var QuestionSchema = mongoose.Schema({
    quest: {type:String, required:[true, "Must enter Question"]},
    desc: {type:String},
    answers: [{type: Schema.Types.ObjectId, ref:'Answer'}]
}, {timestamps:true});

mongoose.model("Question", QuestionSchema);