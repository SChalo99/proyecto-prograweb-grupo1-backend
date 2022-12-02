import { DataTypes } from 'sequelize'

import sequelize from '../config/database.js'

const formulario = sequelize.define('formulario', {

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
        type: DataTypes.INTEGER
    },
    subject: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    }
})


export default formulario;