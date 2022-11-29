import { DataTypes } from 'sequelize'

import sequelize from '../config/database.js'

const Category = sequelize.define('category', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING
    },
    decription: {
        type: DataTypes.STRING
    }
})


export default Category;