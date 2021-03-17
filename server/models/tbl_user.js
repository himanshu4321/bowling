/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tbl_user', {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
    //   user_id: {
    //     type: DataTypes.INTEGER(11),
    //     allowNull: false,
    //     references: {
    //       model: 'tbl_user',
    //       key: 'id'
    //     }
    //   },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      phone: {
        type: DataTypes.STRING(255),
        allowNull: true
      }
    }, {
      tableName: 'tbl_user'
    });
  };