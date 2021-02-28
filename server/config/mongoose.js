var mongoose = require("mongoose");
var path = require("path");
var rootPath = path.normalize(__dirname + '/../../');

module.exports = function (config) {
  /*Interaction with Mongo DB*/
  mongoose.connect(config.dburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });
  var con = mongoose.connection;
  con.on('error', console.error.bind(console, 'connection error:'));
  con.once('open', function () {
    console.log('Connection to Bowling mongo db is successful!!!');
  })
}

