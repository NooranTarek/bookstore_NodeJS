import Author from "../models/author.model.js";
import Book from "../models/book.model.js";
import { catchAsyncErr } from "../utilities/catchError.js";


const addAuthor = catchAsyncErr(async (req, res) => {
    const { name, email, bio } = req.body;
    const existingAuthor = await Author.findOne({ email });
    if (existingAuthor) {
        return res.status(400).json({ message: "Author already exists" });
    }
    const author = await Author.create({ name, email, bio });
    res.status(201).json({ message: "Author added successfully", author });
});

const updateAuthor = catchAsyncErr(async (req, res) => {
    const id = req.params.id; 
    const { name, email, bio } = req.body; 
    const author = await Author.findByIdAndUpdate(id, { name, email, bio }, { new: true });
    if (!author) {
        return res.status(404).json({ message: "Author not found" });
    }
  res.status(200).json({ message: "Author updated successfully", author });
});
const deleteAuthor = catchAsyncErr(async (req, res) => {
    const id = req.params.id;
    const author = await Author.findByIdAndDelete(id);
    if (!author) {
        return res.status(404).json({ message: "Author not found" });
    }
    await Book.deleteMany({ author: id });
    res.status(200).json({ message: "Author and their books deleted successfully" });
});

const getAuthorDetails = catchAsyncErr(async (req, res) => {
    const id = req.params.id;
    const author = await Author.findById(id);
    if (!author) {
        return res.status(404).json({ message: "Author not found" });
    }
    res.status(200).json(author);
});

const getAllAuthors = catchAsyncErr(async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 3;
    const skip = (page - 1) * limit;

    const authors = await Author.find().skip(skip).limit(limit);
    const totalAuthors = await Author.countDocuments();

    res.status(200).json({
        page,
        limit,
        totalAuthors,
        totalPages: Math.ceil(totalAuthors / limit),
        authors
    });
});
export{
    addAuthor,
    updateAuthor,
    deleteAuthor,
    getAuthorDetails,
    getAllAuthors
}