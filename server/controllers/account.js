const { getSuccessResponse, getFailureResponse }    = require('../utils/helpers');
const accountService                                = require("../services/account.service");


exports.billSeprate = async function(req, res){
    try{
        var params =    req.body;
        if(params.groupId==undefined || params.groupId=='' || params.groupId==null){
            return res.send(getFailureResponse("ETU_0001","Please provide the group id"));
        }
        if(params.paidUserId==undefined || params.paidUserId=='' || params.paidUserId==null){
            return res.send(getFailureResponse("ETU_0001","Please provide the paid user id"));
        }
        if(params.userIds==undefined || params.userIds=='' || params.userIds==null || params.userIds.length==0){
            return res.send(getFailureResponse("ETU_0001","Please provide the user ids"));
        }
        if(params.type==undefined || params.type=='' || params.type==null){
            return res.send(getFailureResponse("ETU_0001","Please provide the payment split type"));
        }
        if(params.balance==undefined || params.balance=='' || params.balance==null || params.balance<=0) {
            return res.send(getFailureResponse("ETU_0001","Please provide the payment balance"));
        }
        var response = await accountService.splitBalanceWithUser(params);
        return res.send(getSuccessResponse(response));
    }catch(err){
        return res.send(getFailureResponse("ETU_0001",err.message));
    }
}