const express=require('express');
const User=require('../api/controller/UserController.js');
const router=express.Router();
router.post('/saveUser', async (req, res) => {
    console.log(req.body)
    const user = await User.saveUser(req);
    res.send(user);
  });
  module.exports=router;