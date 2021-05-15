module.exports =  (app) =>{
    const constants     = require("../utils/constants");
    const user          = require("../controllers/user");
    app.post(constants.apiBasePath +"/user", user.create);
}