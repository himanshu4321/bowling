var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var scoreSchema = mongoose.Schema({
        score: {
            type: String,
            required: true
        },
        playerId:{
            type:Array,
            required:true
        }
    },  
    {
        timestamps: true
    }
);

module.exports = mongoose.model('score', scoreSchema);
