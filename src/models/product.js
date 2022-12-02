import { DataTypes } from 'sequelize'

import sequelize from '../config/database.js'
import Category from './category.js'

const Product = sequelize.define('product', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.DOUBLE
    },
    description: {
        type: DataTypes.STRING
    },
    category_id: {
        type: DataTypes.INTEGER
    }
}, 
{
    timestamps : false,
    freezeTableName : true
})

Category.hasMany(Product,{
    foreignKey: 'category_id',
    sourceKey: 'id'
})

Product.belongsTo(Category,{
    foreignKey: 'category_id',
    targetId: 'id'
})

export default Product;