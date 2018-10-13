const http = require('http');

const express = require('express');
const app = express();
require('./startup/routes.js')(app);

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/database',{ useNewUrlParser: true } ).then(()=>console.log('connected to mongodb')).catch(err=>console.error('connection failed'));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log(`Listening on port ${port}...`));
module.exports = server
