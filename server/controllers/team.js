const { getSuccessResponse, getFailureResponse }    = require('../utils/helpers');
const teamService                                   = require("../services/team.service");

exports.team = async function(req, res){
    try{
        const params        = req.body;
        const teamBody      = params.team;
        const developerBody = params.developers;
        if(teamBody.name == undefined || teamBody.name =='' || teamBody.name == null){
            return res.send(getFailureResponse("ETU_0001","Please provide the team name"));
        }
        if(developerBody==undefined || developerBody==''|| developerBody== null || developerBody.length==0){
            return res.send(getFailureResponse("ETU_0001","Please provide the developer details"));
        }
        let checkTeamExistOrNot = await teamService.checkTeamExistOrNot(params);
        if(checkTeamExistOrNot.length>0){
            return res.send(getFailureResponse("ETU_0001","Team is already created"));
        }
        const dataBody = {
            "name":params.team.name,
            "developers":params.developers
        };
        let createTeam = await teamService.createTeamWithDeveloper(dataBody);
        if(createTeam){
            return res.send(getSuccessResponse(createTeam));
        }else{
            return res.send(getFailureResponse("ETU_0001","Cant able to create team"))
        }
    }catch(err){
        return res.send(getFailureResponse("ETU_0001",err.message+" Error ocurred"));
    }
}