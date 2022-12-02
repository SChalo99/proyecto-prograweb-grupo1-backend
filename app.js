import express from 'express'
import cors from "cors";
import bodyParser from 'body-parser'
import userRoute from './src/routes/user.js'
import perifericRoute from './src/routes/periferic.js'

var app = express();

app.use(cors());

app.use(bodyParser.json());

app.use('/periferic', perifericRoute);

app.use('/user', userRoute)

export default app