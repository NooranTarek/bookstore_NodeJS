import express from 'express';
import * as bookController from '../controllers/book.controller.js'


const bookRouter=express.Router();
bookRouter.post("/",bookController.addBook)
export default bookRouter;