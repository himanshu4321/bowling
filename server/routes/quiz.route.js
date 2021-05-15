module.exports =  (app) =>{
    const constants     = require("../utils/constants");
    const quiz         = require("../controllers/quiz");
    app.post(constants.apiBasePath +"/quiz", quiz.create);
}