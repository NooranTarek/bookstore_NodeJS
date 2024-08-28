import express from 'express';
import * as bookController from '../controllers/book.controller.js'
import { upload } from '../config/cloudinary.js';


const bookRouter=express.Router();
bookRouter.post("/",upload.single('image'),bookController.addBook)
bookRouter.put('/:id',upload.single('image'),bookController.updateBook);
bookRouter.delete('/:id',bookController.deleteBook);
bookRouter.get('/search',bookController.searchBookByTitle);
bookRouter.get('/author/:id',bookController.filterBooksByAuthor);
bookRouter.get('/:id',bookController.getBookDetails);
bookRouter.get('/',bookController.getAllBooks);


export default bookRouter;