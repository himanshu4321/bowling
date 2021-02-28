const dotenv 	= require('dotenv');
dotenv.config();
module.exports = {
    getSuccessResponse : function(data){
        return {
            status: 'success',
            data: data
        }
    },
    getFailureResponse : function(errorCode, message){
        return {
            status: 'failure',
            errorCode,
            message
        }
    }
}
