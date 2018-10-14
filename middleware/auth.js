const jwt=require('jsonwebtoken');
var config = require('config');
module.exports=function(req,res,next){
    const token=req.header('x-auth-token');
    if(!token)return res.status(401).send('Access denied. No token provided.');
    try {
        const decoded=jwt.verify(token,config.get('jwtPrivateKey'));
        console.log(decoded);
        req.body=decoded;
        next();
    } catch (error) {
        res.status(400).send('Invalid token.');
    }
    // const token=jwt.sign({name:'Ganesh'},config.get('jwtPrivateKey'));
    // console.log(token);
    // res.status(200).send(token);
}