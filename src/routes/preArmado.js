import express from 'express'
import PreArmadoController from '../controllers/PreArmadoController.js';

const { getAllArmado } = PreArmadoController

const router = express.Router();

router.get('/', getAllArmado)
export default router