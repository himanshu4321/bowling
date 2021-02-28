module.exports =  (app) =>{
    const constants     = require("../utils/constants");
    const player          = require("../controllers/player.js");
    app.get(constants.apiBasePath +"/score/:game_id/player/:player_id",  player.score);
    app.post(constants.apiBasePath +"/player-registration", player.playerRegistration);
    app.put(constants.apiBasePath +"/play/:game_id/player/:player_id",  player.play);
}