const Developer = require("../models/Developer");

exports.createDeveloperWithTeam = async function(params){
    var result = await Developer.insertMany(params);
    
}