module.exports =  (app) =>{
    const constants              = require("../utils/constants");
    const teamController         = require("../controllers/team.js");
    const alertController         = require("../controllers/alertMaintainanceSystem");
    app.post(constants.apiBasePath +"/team", teamController.team);
    app.get(constants.apiBasePath +"/sendAlert/:team_id",  alertController.alertSystem);


}