import express from "express";
import fs from "fs";

const app = express();

app.get("/", (req, res)=>{
    res.send("Hello this is my First one")
});

app.get("/product", (req, res)=>{
    res.send('This is the product ')
});
const PORT = 5000;
app.listen(PORT, ()=>{
    console.log("Server is listening on the PORT " + PORT);
});