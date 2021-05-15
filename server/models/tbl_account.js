/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tbl_account', {
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
      amount: {
        type: DataTypes.DOUBLE(100),
        allowNull: false
      },
      credit: {
        type: DataTypes.DOUBLE(100),
        allowNull: false
      },
      debit: {
        type: DataTypes.DOUBLE(100),
        allowNull: false
      }
    }, {
      tableName: 'tbl_account'
    });
  };