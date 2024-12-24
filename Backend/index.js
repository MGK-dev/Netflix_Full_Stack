//step-1 create server
// const express = require("express");
// const dotenv = require("dotenv");

import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js"
import cookieParser from "cookie-parser";
import userRoute from "./Routes/userRoute.js";
import cors from "cors";


databaseConnection();

dotenv.config({
    path: ".env"
})

const app = express();
//middlewares
app.use(express.urlencoded({ extended:true }))
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
    origin:'http://localhost:5173',
    credentials:true
}
app.use(cors(corsOptions));
// app.get("/", (req, res) => {
//     res.status(200).json({
//         message:"hello world from backend!",
//         success:true,
//     })
// })


//API's (http://localhost:3000/api/v1/user/)
app.use("/api/v1/user", userRoute);
//(http://localhost:3000/api/v1/user/register)



app.listen(process.env.PORT, () => {
    // console.log("Mongo URI:", process.env.MONGO_URI);
    console.log(`Server listen at port ${process.env.PORT}`) 
})
