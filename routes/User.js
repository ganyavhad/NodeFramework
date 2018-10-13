const express=require('express');
const User=require('../api/controller/UserController.js');
const router=express.Router();
router.post('/saveUser', async (req, res) => {
    const user = await User.saveUser(req);
    res.send(user);
  });
router.post('/getAllUser', async (req, res) => {
    const user = await User.getAllUser(req);
    res.send(user);
});
module.exports=router;