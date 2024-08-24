const { sequelize, DataTypes} = require ('sequelise');
const sequelize = new sequelize('sqlite::memory');

const User = new sequelize.define(
    'User',
{
    //atributos da model
    firstname: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    lastName: {
        type: DataTypes.STRING,
        //allowNull tem valor padrao true
    },
},
{
    //outras opcoes aqui
},
);