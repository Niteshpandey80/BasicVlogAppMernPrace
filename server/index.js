const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Hello Bro")
})
app.listen(3000 , ()=>{
    console.log("Runing on the Port ")
})