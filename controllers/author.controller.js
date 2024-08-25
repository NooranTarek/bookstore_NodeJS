//add author
//update author
//delete author
//disply all authors --> paginated
//desply spesific author details 

import Author from "../models/author.model.js";
import { catchAsyncErr } from "../utilities/catchError.js";


const addAuthor=catchAsyncErr(async (req,res)=>{
    const {name,email,bio}=req.body;
    const author=await Author.create({name,email,bio});
    res.status(201).json({ message: "Author Addedd successfully",author});

})
const updateAuthor = catchAsyncErr(async (req, res) => {
    const id = req.params.id; 
    const { name, email, bio } = req.body; 
    const author = await Author.findByIdAndUpdate(id, { name, email, bio }, { new: true });
    if (!author) {
        return res.status(404).json({ message: "Author not found" });
    }
  res.status(200).json({ message: "Author updated successfully", author });
});


export{
    addAuthor,
    updateAuthor
}