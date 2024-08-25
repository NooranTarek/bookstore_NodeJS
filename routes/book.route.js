import express from 'express';
import * as bookController from '../controllers/book.controller.js'


const bookRouter=express.Router();
bookRouter.post("/",bookController.addBook)
bookRouter.put('/:id',bookController.updateBook);
bookRouter.delete('/:id',bookController.deleteBook);
export default bookRouter;