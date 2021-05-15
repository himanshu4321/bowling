const db            = require("../../server/config/sequalize");
const QuestionMap   = db.questionMap;
const Quiz          = db.quiz;
const Question      = db.question;

exports.create  = async function(params){
    var result  = await Question.create(params);
    return result;
}

exports.questionMapWithQuiz   = async function(params){
    var result  = await QuestionMap.create(params);
    return result;
}

exports.questionListQuiz   = async function(params){
    QuestionMap.belongsTo(Question, {
        foreignKey: {
            name: 'questionId',
            allowNull: false
        }
    });
    QuestionMap.belongsTo(Quiz, {
        foreignKey: {
            name: 'quizId',
            allowNull: false
        }
    });
    var result  = await QuestionMap.findAll(
        {where:params,
            include: [{
                model: Question,
            }],
        //offset: params.offset, limit:params.limit,
        }
        );
    return result;
}