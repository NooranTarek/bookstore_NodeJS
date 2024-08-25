import express from 'express';
import * as authorController from '../controllers/author.controller.js'

const authorRouter=express.Router();
authorRouter.post('/',authorController.addAuthor);
authorRouter.put('/:id',authorController.updateAuthor);

export default authorRouter;