const { getSuccessResponse, getFailureResponse }    = require('../utils/helpers');
const groupService                                  = require('../services/group.service');

exports.create = async function(req, res){
    try{
        var params = req.body;
        if(params.groupName==undefined || params.groupName==null || params.groupName==''){
            return res.send(getFailureResponse("ETU_0001","Please provide the group name")); 
        }
        var response = await groupService.createGroup(params);
        return res.send(getSuccessResponse(response));
    }catch(err){
        res.send(getFailureResponse("ETU_0001", err.message));
    }
}

exports.userMapWithGroup = async function(req, res){
    try{
        var params = req.body;
        if(params.groupId==undefined || params.groupId=='' || params.groupId==null){
            return res.send(getFailureResponse("ETU_0001","Please provide the group id"));
        }
        if(params.userId == undefined || params.userId == '' || params.userId == null){
            return res.send(getFailureResponse("ETU_0001","Please provide the group userId"));
        }
        var groupExistwithUserOrNot = await groupService.findGroup(params);
        if(groupExistwithUserOrNot!=null){
            return res.send(getFailureResponse("ETU_0001","Group is already created"));
        }
        var response =  await groupService.groupMap(params);
        return res.send(getSuccessResponse(response));
    }catch(err){
        res.send(getFailureResponse("ETU_0001", err.message ))
    }
}