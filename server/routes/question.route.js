module.exports =  (app) =>{
    const constants     = require("../utils/constants");
    const question      = require("../controllers/question");
    app.post(constants.apiBasePath +"/question", question.create);
    app.post(constants.apiBasePath +"/questionMap", question.questionMapWithQuiz);
    app.post(constants.apiBasePath +"/questionList", question.questionList);

}