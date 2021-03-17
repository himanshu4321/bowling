const request   = require("request-promise");
require('dotenv').config();
exports.sendAlertMessage = async function(phone,message){
    var result;
    var   dataBody ={
        phone_number:phone,
        message:message
    };
   const options = {
        url: process.env.SEND_MESSAGE_URL,
        method: 'POST',
        body: JSON.stringify(dataBody),
        headers: {
            'Content-Type': 'application/json',
            'Accept-Charset': 'utf-8'
        }
    };
    await request(options, function(err, response, body) {
        if(err){
            console.log(err);
        }
        result =body;
    });
    return result;
}