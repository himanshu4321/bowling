const db = require("../../server/config/sequalize");
const User = db.user;
const Op = db.Sequelize.Op;


exports.createUser = async function(params){
    var result = await User.create(params);
    return result;
}