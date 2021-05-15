/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tbl_group', {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
    //   userId: {
    //     type: DataTypes.INTEGER(11),
    //     allowNull: false,
    //     references: {
    //       model: 'tbl_user',
    //       key: 'id'
    //     }
    //   },
      groupName: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      status: {
        type: DataTypes.INTEGER(1),
        allowNull: false
      }
    }, {
      tableName: 'tbl_group'
    });
  };