const express = require("express");
const path = require("path");

const app = express();

//public access for .css files
//so public is a root folder
app.use(express.static(path.join(__dirname,'public'))); 

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"views/home.html"));
});

app.get('/users',(req,res)=>{
    res.sendFile(path.join(__dirname,"views/users.html"));
});

app.listen(3000);