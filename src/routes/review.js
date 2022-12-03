import express from 'express'
import ReviewController from '../controllers/ReviewController.js';

const router = express.Router();
const { getall } = ReviewController

router.get('/', getall)

export default router