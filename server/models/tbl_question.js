/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tbl_question', {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      question: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      options: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      answer: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
    }, {
      tableName: 'tbl_question'
    });
  };