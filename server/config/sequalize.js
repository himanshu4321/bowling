
var Sequelize = require("sequelize");
require('dotenv').config();
var sequelize = new Sequelize(process.env.DATABASE, process.env.USERNAME, process.env.PASSWORD, {
    host: process.env.HOSTNAME,
    dialect: 'mysql',
    port: process.env.PORT,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    logging: false,
    define: {
        timestamps: false,
    }
});
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  const db = {};

  db.Sequelize    = Sequelize;
  db.sequelize    = sequelize;
  db.user         = require("../../server/models/tbl_user")(sequelize, Sequelize);
  db.group        = require("../../server/models/tbl_group")(sequelize, Sequelize);
  db.groupMap     = require("../models/tbl_group_user_map")(sequelize, Sequelize);
  db.groupBalance = require("../models/tbl_group_balance")(sequelize, Sequelize);
  db.quiz         = require("../models/tbl_quiz")(sequelize, Sequelize);
  db.question     = require("../models/tbl_question")(sequelize, Sequelize);
  db.questionMap  = require("../models/tbl_question_map_quiz")(sequelize, Sequelize);



  module.exports = db;
