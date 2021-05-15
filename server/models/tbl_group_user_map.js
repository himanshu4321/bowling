/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tbl_group_user_map', {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      userId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: 'tbl_user',
          key: 'id'
        }
      },
      groupId: {
        type: DataTypes.INTEGER(100),
        allowNull: false
      }
    }, {
      tableName: 'tbl_group_user_map'
    });
  };