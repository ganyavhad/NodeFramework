var User = require('../services/User.js');
var controller={
    saveUser:async function(req){
              const result=await User.saveUser(req.body);
              return(result);
    },
    getAllUser:async function(req){
        const result=await User.getAllUser(req.body);
        return(result);
    }
}
module.exports = controller;