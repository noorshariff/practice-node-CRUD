const mongoose=require('mongoose');
const Schema=mongoose.Schema


let user=new Schema({
    name:{
        type:String
    },
    password:{
        type:String
    }
});


module.exports=mongoose.model('Employee',user)