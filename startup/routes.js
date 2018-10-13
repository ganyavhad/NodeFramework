const express=require('express');
const User=require('../routes/User.js');
module.exports=function(app){
    app.use(express.json())
    app.use('/api/User', User);
}