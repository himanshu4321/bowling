const userService                                   = require("../services/user.service");
const { getSuccessResponse, getFailureResponse }    = require('../utils/helpers');

exports.create = async function(req, res){
    try{
        if(!req.body){
            return res.send(getFailureResponse('ETU_0001', "Please provide the required fields"));
        }
        const userCreate = await userService.createUser(req.body);
        return res.send(getSuccessResponse(userCreate));
    }catch(err){
        return res.send(getFailureResponse("ETU_0001",err.message));  
    }
}