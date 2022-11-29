import { DataTypes } from 'sequelize'

import sequelize from '../config/database.js'
import Order from './order.js'
import Product from './product.js'

const OrderProduct = sequelize.define('order_product', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    order_id: {
        type: DataTypes.INTEGER
    },
    product_id: {
        type: DataTypes.INTEGER
    }
})

Order.hasMany(OrderProduct,{
    foreignKey: 'order_id',
    sourceKey: 'id'
})

OrderProduct.belongsTo(Order,{
    foreignKey: 'order_id',
    targetId: 'id'
})

Product.hasMany(OrderProduct,{
    foreignKey: 'product_id',
    sourceKey: 'id'
})

OrderProduct.belongsTo(Product,{
    foreignKey: 'product_id',
    targetId: 'id'
})

export default OrderProduct;