const http = require('http');
const express = require('express');
const app = express();
app.use(express.json());
var User=require('./api/controller/UserController.js');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/database',{ useNewUrlParser: true } ).then(()=>console.log('connected to mongodb')).catch(err=>console.error('connection failed'));

const demoSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
});
const Demo=mongoose.model('demo',demoSchema);

app.get('/',(req,res)=>{
    res.write('Hello we done it with express');
    res.end();
});
app.post('/saveData',async(req,res)=>{
    console.log(req.body);
 var  result = await User.saveUser(req);
  res.send(result)
})
console.log("lsitening on 1993")
app.listen(1993);