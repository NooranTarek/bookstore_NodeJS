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

export{
    addAuthor
}