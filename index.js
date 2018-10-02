const http = require('http');
const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.write('Hello we done it with express');
    res.end();
})

console.log("lsitening on 1993")
app.listen(1993);