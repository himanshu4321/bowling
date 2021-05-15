const { getSuccessResponse, getFailureResponse }    = require('../utils/helpers');
const Quiz                                          = require("../services/quiz.service");
exports.create = async function(req, res){
    try{
        var params = req.body;
        if(params.quizName==undefined || params.quizName=='' || params.quizName==null){
            res.send(getFailureResponse("ETU_0001","Please provide the quiz name"));
        }
        var response = await Quiz.create(params);
        res.send(getSuccessResponse(response));
    }catch(err){
        res.send(getFailureResponse("ETU_0001",err.message));
    }

}