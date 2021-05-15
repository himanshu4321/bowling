module.exports =  (app) =>{
    const constants     = require("../utils/constants");
    const account       = require("../controllers/account");
    app.post(constants.apiBasePath +"/billSeprate", account.billSeprate);
}