/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tbl_question_map_quiz', {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      quizId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: 'tbl_quiz',
          key: 'id'
        }
      },
      questionId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: 'tbl_question',
          key: 'id'
        }
      },
    //   groupId: {
    //     type: DataTypes.INTEGER(100),
    //     allowNull: false
    //   }
    }, {
      tableName: 'tbl_question_map_quiz'
    });
  };