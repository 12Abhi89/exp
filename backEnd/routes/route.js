const express=require("express");
const router=express.Router();
const contact=require("../models/contact");
//get contact

router.get('/contact',(req,res,next)=>{
    contact.find((err,FrontEndcontact)=>{
        res.json(FrontEndcontact);
    });
});

//add contact
router.post('/contact',(req,res,next)=>{
    let newContact=new contact({
         firstname : req.body.firstname,
         lastname :req.body.lastname,
         phone :req.body.phone,
    });

    newContact.save((err,FrontEndcontac)=>{
        if(err)
        {
            res.json({msg:'Failed to add contact'});
        }
        else{
            res.json({msg:'contact addded successfully'});
        }
    });
});

//delete contact
router.delete('/contact/:id',(req,res,next)=>{
    contact.deleteOne({_id: req.params.id},(err,result)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(err);
        }
    });
});



module.exports=router;