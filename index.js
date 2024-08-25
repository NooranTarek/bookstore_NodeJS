import express from 'express'
import { dbConnection } from './database/dbConnection.js'
import dotenv from 'dotenv';
import errorHandler from './src/middlewares/globalErrorHandling.js';
const app = express()
const port = 3000
dotenv.config();
dbConnection();
app.use(errorHandler);
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))