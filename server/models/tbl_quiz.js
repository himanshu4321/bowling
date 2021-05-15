/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tbl_quiz', {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      quizName: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
    }, {
      tableName: 'tbl_quiz'
    });
  };