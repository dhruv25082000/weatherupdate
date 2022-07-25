const express = require('express');
const path =require('path')
const app =express();
const port=process.env.PORT ||8000
// public status ka path h middleviewer jese
//  console.log(path.join(__dirname, "../public"));
app.set('view engine', 'hbs');
const static_path=path.join(__dirname, "../public")

app.use(express.static(static_path)); 

app.get("", (req,res)=>{
    res.render('index')
})
// render ka mtlb??

app.get("/about",  (req,res)=>{
    res.render('about')
})  
app.get("/weather",  (req,res)=>{
    res.render('weather')
})
app.get("*",  (req,res)=>{
    res.render('404error.hbs',{
        errorMsg : 'oops Page not found'
    })
})


app.listen(port,()=>{
    console.log('listeing on the port : 3000')
})