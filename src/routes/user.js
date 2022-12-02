import express from 'express'
import UserControler from "../controllers/UserController.js";

const {login, findOne} = UserControler

const router = express.Router();

router.get('/:email/:password', login)
router.get('/:id', findOne)
export default router