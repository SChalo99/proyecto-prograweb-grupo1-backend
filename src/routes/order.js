import express from 'express'
import OrderControler from '../controllers/OrderController.js';

const {create} = OrderControler

const router = express.Router();

router.post('/', create)

export default router