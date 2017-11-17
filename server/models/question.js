var mongoose = require('mongoose');

var QuestionSchema = mongoose.Schema({
    content: {type:String, required:[true, "Must enter Question"]},
    answers: [{type: Schema.Types.ObjectId, ref:'Answer'}]
}, {timestamps:true});

var AnswerSchema = mongoose.Schema({
    name:{type:String, required:[true, "Please enter name"]},
    answer:{type:String, required:[true, "Please enter your answer"]},
    detail:String,
    likes:{type:Number, default:0},
    _question: {type: Schema.Types.ObjectId, ref:'Question'}
}, {timestamps:true});

mongoose.model("Answer", AnswerSchema);

mongoose.model("Question", QuestionSchema);