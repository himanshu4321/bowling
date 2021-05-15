const db = require("../../server/config/sequalize");
const Quiz = db.quiz;

exports.create  = async function(params){
    var result  = await Quiz.create(params);
    return result;
}