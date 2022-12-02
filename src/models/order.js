import { DataTypes } from 'sequelize'

import sequelize from '../config/database.js'
import User from './user.js'

const Order = sequelize.define('order', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    amount: {
        type: DataTypes.DOUBLE
    },
    direction: {
        type: DataTypes.STRING
    },
    date: {
        type: DataTypes.DATE
    },
    user_id: {
        type: DataTypes.INTEGER
    }
}, 
{
    timestamps : false,
    freezeTableName : true
})

User.hasMany(Order,{
    foreignKey: 'user_id',
    sourceKey: 'id'
})

Order.belongsTo(User,{
    foreignKey: 'user_id',
    targetId: 'id'
})

export default Order;