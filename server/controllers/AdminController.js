const fs=require('fs');
const User=require('./../models/userModel');
const asyncHandler=require('express-async-handler');



const getStudentProfiles=asyncHandler(async(req,res)=>{
    
     User.find({role:'student'},function(err,users){
        
        if(err)
        {
          res.json({
            message:err,
          });
        }
        else{
            res.json({
                'data':users
            });
        }
    });
    
})

const getFacultyProfiles=asyncHandler(async(req,res)=>{
    
  User.find({role:'faculty'},function(err,users){
     
     if(err)
     {
       res.json({
         message:err,
       });
     }
     else{
         res.json({
             'data':users
         });
     }
 });
 
})

const changeProfileStatus=asyncHandler(async(req,res)=>{
    
  User.findByIdAndUpdate({_id:req.body.accId},{status:req.body.status},function(err,user){
     
     if(err)
     {
       res.json({
         message:err,
       });
     }
     else{
         res.json({
             'data':"successfully updated"
         });
     }
 });
 
})
const deleteProfile=asyncHandler(async(req,res)=>{
    console.log('acc id:'+req.params.accId);
  User.findByIdAndDelete({_id:req.params.accId},function(err,users){
     
     if(err)
     {
       res.json({
         message:err,
       });
     }
     else{
         res.json({
             'data':"successfully deleted"
         });
     }
 });
 
})

module.exports={
 getStudentProfiles,
 getFacultyProfiles,
 changeProfileStatus,
 deleteProfile
}