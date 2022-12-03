import express from 'express'
import PreArmadoProductoController from '../controllers/PreArmadoProductoController.js'

const { findProducto } = PreArmadoProductoController

const router = express.Router();

router.get('/:id', findProducto)
export default router