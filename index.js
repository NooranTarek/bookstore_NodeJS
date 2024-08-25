import express from 'express'
import { dbConnection } from './database/dbConnection.js'
import dotenv from 'dotenv';
import errorHandler from './middlewares/globalErrorHandling.js';
import router from './routes/index.js';
import cors from "cors"
const app = express()
dotenv.config();


const corsOptions = {
  origin: 'http://localhost:4200', 
  optionsSuccessStatus: 200 
};

app.use(cors(corsOptions))
app.use(express.json());
app.use("/",router)
app.use(errorHandler);



dbConnection();
const port = 3000
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))