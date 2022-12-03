import express from 'express'
import OrderProductControler from '../controllers/OrderProductController.js';

const {create, findProduct} = OrderProductControler

const router = express.Router();

router.get('/:id', findProduct)
router.post('/', create)

export default router