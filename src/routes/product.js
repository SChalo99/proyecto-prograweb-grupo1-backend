import express from 'express'
import ProductController from '../controllers/ProductController.js';

const { getall } = ProductController

const router = express.Router();

router.get('/', getall)
export default router