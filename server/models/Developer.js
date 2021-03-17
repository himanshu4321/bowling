var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var deveLoperschema = mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        team_id:{
            type:String,
            required:true,
            ref: 'team'
        },
        phone_number: {
            type: String,
            required: true
        }
    },  
    {
        timestamps: true
    }
);

module.exports = mongoose.model('team', deveLoperschema);
