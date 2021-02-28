var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var gameSchema = mongoose.Schema({
        name: {
            type: String,
            required: true
        }
    },  
    {
        timestamps: true
    }
);

module.exports = mongoose.model('game', gameSchema);
