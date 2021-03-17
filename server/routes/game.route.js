module.exports =  (app) =>{
    const constants     = require("../utils/constants");
    const game          = require("../controllers/game.js");
    app.post(constants.apiBasePath +"/create", game.create);
    app.post(constants.apiBasePath +"/saveDriverLocation", game.saveDriverLocation);
    app.post(constants.apiBasePath +"/getNearestDriverByDistance", game.getNearestDriverByDistance);
    app.post(constants.apiBasePath +"/user", game.user);


}