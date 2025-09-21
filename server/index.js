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
const Vlog = mongoose.model('Vlog' ,vlogSchema)
app.get('/vlogs' , async(req,res)=>{
    const vlogs = await Vlog.find();
    res.json(vlogs)
});
app.post('/vlogs' ,async (req,res)=>{
    const vlog = new Vlog(req.body);
    await vlog.save();
    res.json(vlog)
})


app.listen(3000 , ()=>{
    console.log("Runing on the Port ")
})  