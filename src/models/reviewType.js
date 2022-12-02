import { DataTypes } from 'sequelize'

import sequelize from '../config/database.js'
import Review from './review';

const Review_Type = sequelize.define('reviewType', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    review_id: {
        type: DataTypes.INTEGER
    }
}, 
{
    timestamps : false,
    freezeTableName : true
})

Review.hasMany(Review_Type,{
    foreignKey: 'review_id',
    sourceKey: 'id'
})

Review_Type.belongsTo(Review,{
    foreignKey: 'review_id',
    targetId: 'id'
})

export default Review_Type;