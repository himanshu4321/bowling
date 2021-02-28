global.express      = require("express");
global.compression  = require('compression');
global.http         = require('http');
global.env          = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
global.port         = (process.env.PORT || '3030');

/*Creating the APP*/
var app = express();


app.use(compression());
app.set('port', port);
/*Configuring the APP - Start*/
var config = require('./server/config/config')[env];
require('./server/config/mongoose')(config);
require('./server/config/express')(app,config);
require('./server/routes/game.route')(app);
require('./server/routes/player.route')(app);
// require('./server/routes/authentication.routes.js')(app);
console.log('Bowling server running in port =' + port);



var server = http.createServer(app);
server.listen(port);
