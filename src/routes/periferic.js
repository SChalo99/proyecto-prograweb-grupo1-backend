import express from 'express'
import PerifericController from '../controllers/PerifericController.js'

const { getallperifericos } = PerifericController

const router = express.Router();

router.get('/', getallperifericos)
export default router