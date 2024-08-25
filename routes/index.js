import authorRouter from "./author.route.js";
import express from 'express';
import bookRouter from "./book.route.js";




const router = express.Router();


router.use("/authors",authorRouter)
router.use("/books",bookRouter)


export default router;
