const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/vlogApp').then(()=>{
    console.log('connected to the db')
}).catch((err)=>console.log(err))

const vlogSchema = new mongoose.Schema({
    title:String , 
    description:String, 
    videourl:String 
})
const vlog = mongoose.model('vlog' ,vlogSchema)
app.get('/' , (req,res)=>{
    res.send("Hello Bro ")
})

app.listen(3000 , ()=>{
    console.log("Runing on the Port ")
})  