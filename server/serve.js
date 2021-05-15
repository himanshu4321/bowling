const http = require('http');
const WebSocketServer = require('websocket').server;
const exec                                          = require("child_process").exec;

const server = http.createServer();
server.listen(8081);
const wsServer = new WebSocketServer({
    httpServer: server
});
wsServer.on('request', function(request) {
    const connection = request.accept(null, request.origin);
    exec("tail -10 /var/www/html/bowling/server/log.txt", function(err,result) {

        if(err){ //process error
         //   return res.send(getFailureResponse("ETU_0001",err));
         console.log(err);
        }
        else{ console.log("success open");
        var test = result
        connection.on('message', function(message) {
            console.log(test);
            console.log('Received Message:', message.utf8Data);
            connection.sendUTF(test);
          });
          connection.on('close', function(reasonCode, description) {
              console.log('Client has disconnected.');
          });
            //return res.send(getSuccessResponse(result));
        }
        })
   
});
