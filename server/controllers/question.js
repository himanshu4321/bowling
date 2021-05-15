const { getSuccessResponse, getFailureResponse }    = require('../utils/helpers');
const Question                                      = require("../services/question.service");
exports.create = async function(req, res){
    try{
        var params = req.body;
        if(params.question==undefined || params.question=='' || params.question==null){
            res.send(getFailureResponse("ETU_0001","Please provide the quiz name"));
        }
        if(params.options==undefined || params.options=='' || params.options==null){
            res.send(getFailureResponse("ETU_0001","Please provide the options"));
        }
        if(params.answer==undefined || params.answer=='' || params.answer==null){
            res.send(getFailureResponse("ETU_0001","Please provide the answer"));
        }
        var response = await Question.create(params);
        res.send(getSuccessResponse(response));
    }catch(err){
        res.send(getFailureResponse("ETU_0001",err.message));
    }

}

exports.questionMapWithQuiz = async function(req, res){
    try{
        var params = req.body;
        if(params.questionId==undefined || params.questionId=='' || params.questionId==null){
            res.send(getFailureResponse("ETU_0001","Please provide the questionId"));
        }
        if(params.quizId==undefined || params.quizId=='' || params.quizId==null){
            res.send(getFailureResponse("ETU_0001","Please provide the quizId"));
        }
        var response = await Question.questionMapWithQuiz(params);
        res.send(getSuccessResponse(response));
    }catch(err){
        res.send(getFailureResponse("ETU_0001",err.message));
    }
}

exports.questionList = async function(req, res){
    try{
        var params = req.body;
        if(params.quizId==undefined || params.quizId=='' || params.quizId==null){
            res.send(getFailureResponse("ETU_0001","Please provide the quizId"));
        }
        // if(params.limit==undefined || params.limit=='' || params.limit==null){
        //     params.limit = 1;
        // }
        // if(params.offset==undefined || params.offset=='' || params.offset==null){
        //     params.offset = 1;
        // }
        var response = await Question.questionListQuiz(params);
        res.send(getSuccessResponse(response));
    }catch(err){
        res.send(getFailureResponse("ETU_0001",err.message));
    }
}

exports.saveAnswer = async function(req, res){
    try{
        var params = req.body;
        if(params.quizId==undefined || params.quizId=='' || params.quizId==null){
            res.send(getFailureResponse("ETU_0001","Please provide the quizId"));
        }
        if(params.limit==undefined || params.limit=='' || params.limit==null){
            params.limit = 1;
        }
        if(params.offset==undefined || params.offset=='' || params.offset==null){
            params.offset = 1;
        }
        var response = await Question.questionListQuiz(params);
        res.send(getSuccessResponse(response));
    }catch(err){
        res.send(getFailureResponse("ETU_0001",err.message));
    }
}

