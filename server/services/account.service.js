const db            = require("../../server/config/sequalize");
const Group         = db.group;
const GroupMap      = db.groupMap;
const GroupBalance  = db.groupBalance;
const Op            = db.Sequelize.Op;

exports.splitBalanceWithUser = async function(params){
    switch(params.type){
        case 'Equal':
            var count       = params.userIds.length+1;
            var balance     = params.balance/count;
            for(var i=0;i<params.userIds.length;i++){
                var test = await balanceUpdate(params.userIds[i],-balance,params.paidUserId,params.groupId);
            }
           var test= await balanceUpdate(params.paidUserId,params.balance-balance,params.paidUserId,params.groupId);
            return;
            break;
        case 'Percentage':
            break;
    }
}

async function balanceUpdate(userIdB,balance,userIdA,groupId){
    var result = await GroupBalance.create({
        userIdA:userIdA,
        balance:parseInt(balance),
        userIdB:userIdB,
        groupId:groupId,
        status:1
    });
    return result;
}