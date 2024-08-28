//filter book by auther
//disply books for spesific author

import Author from "../models/author.model.js";
import Book from "../models/book.model.js";
import { catchAsyncErr } from "../utilities/catchError.js";

const addBook=catchAsyncErr(async(req,res)=>{
    const { title, description, authorId } = req.body;
    const image = req.file?.path;
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
    author.books.push(book._id);
    await author.save();
    res.status(201).json(book);
})
const updateBook = catchAsyncErr(async (req, res) => {
    const id = req.params.id; 
    const image = req.file?.path;
    const { title, description, authorId } = req.body; 
    const book = await Book.findByIdAndUpdate(id, { title, description, image, authorId }, { new: true });
    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }
  res.status(200).json({ message: "Book updated successfully", book });
});
const deleteBook = catchAsyncErr(async (req, res) => {
    const id = req.params.id; 
    const book = await Book.findByIdAndDelete(id);

    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }
    await Author.findByIdAndUpdate(book.author, { 
        $pull: { books: id } 
    });
    res.status(200).json({ message: "Book deleted successfully" });
});

const getBookDetails = catchAsyncErr(async (req, res) => {
    const id = req.params.id;
    const book = await Book.findById(id).populate('author', 'name');
    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(book);
});

const getAllBooks = catchAsyncErr(async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 3;
    const skip = (page - 1) * limit;

    const books = await Book.find().populate('author', 'name').skip(skip).limit(limit);
    const totalBooks = await Book.countDocuments();

    res.status(200).json({
        page,
        limit,
        totalBooks,
        totalPages: Math.ceil(totalBooks / limit),
        books
    });
});
const searchBookByTitle = catchAsyncErr(async (req, res) => {
    const title = req.query.title;
    const books = await Book.find({ title: { $regex: title, $options: 'i' } }).populate('author','name');
    res.status(200).json(books);
});

const filterBooksByAuthor = catchAsyncErr(async (req, res) => {
    const id  = req.params.id;
    const books = await Book.find({ author: id });
    if (!books.length) {
        return res.status(404).json({ message: 'No books found for this author' });
    }
    res.status(200).json(books);
});
export {
    addBook,
    updateBook,
    deleteBook,
    getBookDetails,
    getAllBooks,
    searchBookByTitle,
    filterBooksByAuthor
}