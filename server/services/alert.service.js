const Team          = require("../models/Team");
const sendMessage   = require("../services/sendMessageService")

exports.alertSend = async function(params){
    var result = await Team.findOne({_id:params}).lean();
    console.log(result)
    if(result.developers.length==0){
        return {message:"No developer Available"};
    }
    var resMessage = await sendMessage.sendAlertMessage(result.developers[0].phone_number,"too many concurrent request");
    return resMessage;
}