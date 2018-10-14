var mongoose=require('mongoose');

var schema=new mongoose.Schema({
    name:{
        type:String,
    required:true
}
}); 

module.exports= User= mongoose.model('User',schema);

var model={
    saveUser:async function(data){
        var user = new User(data);
        try {
            result =await user.save();
            return result;
        } catch (error) {
            console.log(error.message)
            return error.message;
        }
       
    },
    getAllUser:async function(data){
        try {
            result =await User.find();
            return result;
        } catch (error) {
            console.log(error.message)
            return error.message;
        }
    },
    getUserByName:async function(data){
        try {
            result =await User.find({name:data.name});
            return result;
        } catch (error) {
            console.log(error.message)
            return error.message;
        }
    }
}

module.exports = model;