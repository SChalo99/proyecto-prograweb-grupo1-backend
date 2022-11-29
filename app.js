import express from 'express'
import cors from "cors";
import bodyParser from 'body-parser'

var app = express();

app.use(cors());

app.use(bodyParser.json());


export default app