const express=require('express');
const auth=require('../middleware/auth.js')
const User=require('../api/controller/UserController.js');
const router=express.Router();
router.post('/saveUser', async (req, res) => {
    const user = await User.saveUser(req);
    res.send(user);
  });
router.post('/getAllUser',auth, async (req, res) => {
    const user = await User.getAllUser(req);
    res.send(user);
});
module.exports=router;