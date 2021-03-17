var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var teamschema = mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        developers:{
            type:[],
            required:true
        }
    },  
    {
        timestamps: true
    }
);

module.exports = mongoose.model('team', teamschema);
