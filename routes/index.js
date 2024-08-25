import authorRouter from "./author.route.js";
import express from 'express';




const router = express.Router();


router.use("/authors",authorRouter)


export default router;
