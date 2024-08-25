import express from 'express';
import * as authorController from '../controllers/author.controller.js'

const authorRouter=express.Router();
authorRouter.post('/',authorController.addAuthor);
authorRouter.put('/:id',authorController.updateAuthor);
authorRouter.delete('/:id',authorController.deleteAuthor);
authorRouter.get('/:id',authorController.getAuthorDetails);
authorRouter.get('/',authorController.getAllAuthors);


export default authorRouter;