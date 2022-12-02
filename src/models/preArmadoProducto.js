import { DataTypes } from 'sequelize'

import sequelize from '../config/database.js'
import PreArmado from './preArmado.js'
import Product from './product.js'

const PreArmadoProducto = sequelize.define('preArmadoProducto', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    preArmado_id: {
        type: DataTypes.INTEGER
    },
    product_id: {
        type: DataTypes.INTEGER
    }
}, 
{
    timestamps : false,
    freezeTableName : true
})

PreArmado.hasMany(PreArmadoProducto,{
    foreignKey: 'preArmado_id',
    sourceKey: 'id'
})

PreArmadoProducto.belongsTo(PreArmado,{
    foreignKey: 'preArmado_id',
    targetId: 'id'
})

Product.hasMany(PreArmadoProducto,{
    foreignKey: 'product_id',
    sourceKey: 'id'
})

PreArmadoProducto.belongsTo(Product,{
    foreignKey: 'product_id',
    targetId: 'id'
})

export default PreArmadoProducto;