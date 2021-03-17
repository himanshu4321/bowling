const { getSuccessResponse, getFailureResponse }    = require('../utils/helpers');
const alertService                                  = require("../services/alert.service");

exports.alertSystem =   async function( req, res){
    try{
        var team_id     = req.params.team_id;
        if(team_id==undefined || team_id=='' || team_id==null){
            return res.send(getFailureResponse("ETU_0001","Please provide the team id"));
        }
        var result = await alertService.alertSend(team_id);
        if(result){
            return res.send(getSuccessResponse(result));
        }
    }catch(err){
        return res.send(getFailureResponse("ETU_0001",err.message+" Error ocurred"));
    }
}