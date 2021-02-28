var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var playerRegistrationSchema = mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        id:{
            type:Number,
            required:true
        },
        playerFrame:{
            type:[],
            //default:0
        },
        game_id: {
            type: String,
           // default:0
        }
    },  
    {
        timestamps: true
    }
);

module.exports = mongoose.model('playerRegistration', playerRegistrationSchema);
