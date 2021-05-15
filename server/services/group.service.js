const db        = require("../../server/config/sequalize");
const Group     = db.group;
const GroupMap  = db.groupMap;
const Op        = db.Sequelize.Op;


exports.createGroup = async function(params){
    params.status   = 1;
    var result      = await Group.create(params);
    return result;
}

exports.groupMap    = async function(params){
    var result      = await GroupMap.create(params);
    return result;
}

exports.findGroup   = async function(params){
    var result      = await GroupMap.findOne({where:params});
    return result;
}