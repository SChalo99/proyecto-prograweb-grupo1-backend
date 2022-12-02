import { DataTypes } from 'sequelize'

import sequelize from '../config/database.js'
import User from './user.js';

const UserInfo = sequelize.define('userInfo', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    direction: {
        type: DataTypes.STRING
    },
    department: {
        type: DataTypes.STRING
    },
    city: {
        type: DataTypes.STRING
    },
    zipCode: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
    user_id: {
        type: DataTypes.INTEGER
    }
}, 
{
    timestamps : false,
    freezeTableName : true
})

User.hasMany(UserInfo,{
    foreignKey: 'user_id',
    sourceKey: 'id'
})

UserInfo.belongsTo(User,{
    foreignKey: 'user_id',
    targetId: 'id'
})

export default UserInfo;