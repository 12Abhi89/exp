const mongoose=require("mongoose");

const contactSchema=mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
});
const Contact=mongoose.model("Contact",contactSchema);
module.exports=Contact;