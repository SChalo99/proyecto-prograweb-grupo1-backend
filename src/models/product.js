import { DataTypes } from 'sequelize'

import sequelize from '../config/database.js'
import Category from './category.js'

const Product = sequelize.define('products', {

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
    decription: {
        type: DataTypes.STRING
    },
    category_id: {
        type: DataTypes.INTEGER
    }
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