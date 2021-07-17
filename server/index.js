import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv"
import DefaultData from "./default.js"
dotenv.config();

const username=process.env.DB_USER;
const password=process.env.DB_PASSWORD;

const app=express();
const PORT=8000;
Connection(username,password);
app.listen(PORT,()=>console.log(`server listen onn localhost://${PORT}`))


//data send to database

DefaultData();