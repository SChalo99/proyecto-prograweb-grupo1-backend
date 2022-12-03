import express from 'express'
import ShoppingCartControler from '../controllers/ShoppingCartController.js';

const {productsList, deleteItem} = ShoppingCartControler

const router = express.Router();

router.get('/:order_id', productsList)
router.delete('/:id', deleteItem)
export default router