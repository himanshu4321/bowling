module.exports =  (app) =>{
    const constants     = require("../utils/constants");
    const game          = require("../controllers/game.js");
    app.post(constants.apiBasePath +"/create", game.create);
}