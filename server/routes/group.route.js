module.exports =  (app) =>{
    const constants     = require("../utils/constants");
    const group         = require("../controllers/group");
    app.post(constants.apiBasePath +"/group", group.create);
    app.post(constants.apiBasePath +"/userMapWithGroup", group.userMapWithGroup);
}