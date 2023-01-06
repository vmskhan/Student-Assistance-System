const fs=require('fs');
const User=require('./../models/userModel');
const asyncHandler=require('express-async-handler');
const AdminControls = require('../models/AdminControlsModel');



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

const getAdminControlsData=asyncHandler(async(req,res)=>{
    
  AdminControls.find({},function(err,controls){
     
     if(err)
     {
       res.json({
         message:err,
       });
     }
     else{
         res.json({
             'data':controls
         });
     }
 });
 
})

const updateAdminControls=asyncHandler(async(req,res)=>{
    const {studProfStatus,faclProfStatus,rules}=req.body;
  AdminControls.findByIdAndUpdate({_id:req.body._id},{studProfStatus,faclProfStatus,rules},function(err,user){
     
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

const createAdminControls=asyncHandler(async(req,res)=>{
  const {accId,studProfStatus,faclProfStatus,rules}=req.body;
AdminControls.create({
    studProfStatus:true,
    faclProfStatus:true,
    rules:[
      {
        role:'student',
        dept:'any',
        year:'any',
        range:'any',
        action:'allow',
    },
    {
      role:'faculty',
      dept:'any',
      range:'any',
      action:'allow',
    }
    ]
  },function(err,controls){
   
   if(err)
   {
     res.json({
       message:err,
     });
   }
   else{
       res.json({
           'data':controls
       });
   }
});

})


module.exports={
 getStudentProfiles,
 getFacultyProfiles,
 changeProfileStatus,
 deleteProfile,
 getAdminControlsData,
 updateAdminControls,
 createAdminControls
}