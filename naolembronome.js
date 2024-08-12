const { sequelize, DataTypes} = require ('sequelise');
const sequelize = new sequelize.define(
    'User',
{
    firstname: {
        type: DataTypes.STRING,
        allowNull:false,
    }
})