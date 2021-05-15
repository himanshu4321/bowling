var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var quizSchema = mongoose.Schema({
        quizName: {
            type: String,
            required: true
        }
    },  
    {
        timestamps: true
    }
);

module.exports = mongoose.model('quiz', quizSchema);
