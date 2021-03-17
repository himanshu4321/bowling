const Team = require("../models/Team");

exports.createTeamWithDeveloper =  async function(params){
    var team    = new Team(params);
    var result  = await team.save();
    return result;
}
exports.checkTeamExistOrNot = async function(params){
    var result = await Team.find({"name":params.team.name});
    return result; 
}