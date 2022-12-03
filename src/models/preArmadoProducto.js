import { DataTypes } from 'sequelize'

import sequelize from '../config/database.js'
import PreArmado from './preArmado.js'
import Product from './product.js'

const PreArmadoProducto = sequelize.define('prearmadoproducto', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    prearmado_id: {
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
    foreignKey: 'prearmado_id',
    sourceKey: 'id'
})

PreArmadoProducto.belongsTo(PreArmado,{
    foreignKey: 'prearmado_id',
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