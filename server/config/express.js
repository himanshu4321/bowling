const path = require("path");
const fs = require("fs");
const express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");


module.exports = function (app, config) {
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
};