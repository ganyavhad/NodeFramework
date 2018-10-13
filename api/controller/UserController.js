var User = require('../services/User.js');
var controller={
     saveUser:async function(req){
              const result=await User.saveUser(req.body);
              return(result);
    }
}
module.exports = controller;