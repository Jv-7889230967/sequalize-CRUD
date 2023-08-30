const { DataTypes } = require('sequelize');
const sequelize = require('../config/DB');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true 
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true, 
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
    }
}, {
    tableName: 'users',
    timestamps:false
});

console.log(User === sequelize.models.User);

module.exports = User;
