import express from 'express'
import cors from "cors";
import bodyParser from 'body-parser'
import userRoute from './src/routes/user.js'

var app = express();

app.use(cors());

app.use(bodyParser.json());


app.use('/user', userRoute)

export default app