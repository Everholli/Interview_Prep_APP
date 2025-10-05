import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
// import bodyParser from 'body-parser';
// import path from 'path';
import { app } from './app.js';
import { connectDB } from './config/db.js';


dotenv.config({
    path: "./.env"
});

connectDB()
.then( () => {
    app.on("errors", (error) => {
        console.log("ERROR: ", error);
        throw error;
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port: ${process.env.PORT}`);
        
    })
})
.catch( (error) => {
    console.log("MongoDB connection failed !!", error);
    
})




