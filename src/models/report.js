import { DataTypes } from 'sequelize'

import sequelize from '../config/database.js'
import User from './user.js';

const Report = sequelize.define('reports', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
    subject: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    user_id: {
        type: DataTypes.INTEGER
    }
})

User.hasMany(Report,{
    foreignKey: 'user_id',
    sourceKey: 'id'
})

Report.belongsTo(User,{
    foreignKey: 'user_id',
    targetId: 'id'
})

export default Report;