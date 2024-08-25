//add new book
//update spesific book
//delete book
//display detailed information about a selected book
//search for spesific book by title
//filter book by auther
//disply all books 
//disply books for spesific author

import Author from "../models/author.model.js";
import Book from "../models/book.model.js";
import { catchAsyncErr } from "../utilities/catchError.js";

const addBook=catchAsyncErr(async(req,res)=>{
    const { title, description, image, authorId } = req.body;
    const author = await Author.findById(authorId);
    if (!author) {
      return res.status(404).json({ message: 'Author not found' });
    }
    const book = new Book({
      title,
      description,
      image,
      author: authorId,
    });

    await book.save();
    res.status(201).json(book);
})

export {
    addBook
}