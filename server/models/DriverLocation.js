var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var locationSchema = mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        lattitude:{
            type:Number,
            //required:true
        },
        longitude:{
            type:Number,
            //required:true
            //default:0
        },
        location:{
            type: { type: String },
            coordinates:[Number],
            //required:true
        }

    },  
    {
        timestamps: true
    }
);
locationSchema.index({ "location": "2dsphere" });


module.exports = mongoose.model('driverLocation', locationSchema);
