import express from 'express'
import UserControler from "../controllers/UserController.js";

const {login, findOne, create} = UserControler

const router = express.Router();

router.get('/:email/:password', login)
router.get('/:id', findOne)
router.post('/', create)

export default router