import mongoose from "mongoose";




export function dbConnection (){
    mongoose.set("strictQuery",true);
    mongoose.connect(process.env.DB_CONN).then(()=>{
        console.log("Connected Successfully to Mongo :)");

    }).catch(()=>{
        console.log("Sorry Failed to Connect to Mongo ");

    })}