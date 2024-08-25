import express from 'express'
import { dbConnection } from './database/dbConnection.js'
import dotenv from 'dotenv';
import errorHandler from './middlewares/globalErrorHandling.js';
import router from './routes/index.js';
const app = express()
dotenv.config();

app.use(express.json());
app.use(errorHandler);
app.use("/",router)



dbConnection();
const port = 3000
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))