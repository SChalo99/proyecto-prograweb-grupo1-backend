import { DataTypes } from 'sequelize'

import sequelize from '../config/database.js'

const User = sequelize.define('users', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING
    },
    lastname: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
}, 
{
    timestamps : false,
    freezeTableName : true
})

export default User;