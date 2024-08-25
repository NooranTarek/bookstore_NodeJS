import express from 'express';
import * as bookController from '../controllers/book.controller.js'


const bookRouter=express.Router();
bookRouter.post("/",bookController.addBook)
bookRouter.put('/:id',bookController.updateBook);
bookRouter.delete('/:id',bookController.deleteBook);
bookRouter.get('/search',bookController.searchBookByTitle);
bookRouter.get('/author/:id',bookController.filterBooksByAuthor);
bookRouter.get('/:id',bookController.getBookDetails);
bookRouter.get('/',bookController.getAllBooks);


export default bookRouter;