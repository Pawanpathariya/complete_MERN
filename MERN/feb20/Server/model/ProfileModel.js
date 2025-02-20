const mongoose=require('mongoose');


const ProfileSchema=new mongoose.Schema({
firstname:String,
lastname:String,
userid:{
    type:mongoose.Schema.ObjectId,
    ref:'User'
}
})

module.exports=mongoose.model('Profile',ProfileSchema)