const fs=require('fs');
const User=require('./../models/userModel');
const asyncHandler=require('express-async-handler');
const AdminControls = require('../models/AdminControlsModel');
const Faculty=require('../models/FacultyModel');
const Student = require('../models/StudentModel');


const getStudentAccounts=asyncHandler(async(req,res)=>{
    
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

const getFacultyAccounts=asyncHandler(async(req,res)=>{
    
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
const getFacultyProfiles=asyncHandler(async(req,res)=>{
  Faculty.find().then((data,err)=>{
    if(err)
    {
      console.log(err);
      res.json({
        'message':err,
      });
    }
    else
    {
      console.log(data);
      res.json({
        'data':data,
      });
    }
  })  
  
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
       res.status(500).json({
         message:err,
       });
     }
     else{
        if(users.role==='student')
          Student.findOneAndDelete({'studentId':req.params.accId}).then((data,err)=>{
            if(err)
            {
              console.log('delete unsuccessful') 
            console.log(err);
            }
            else
            {
              console.log('successfully deleted') 
              console.log(data);  
            }
          });
        else if(users.role==='faculty')
          
        Faculty.findOneAndDelete({'facultyId':req.params.accId})
          .then((data,err)=>{
            if(err)
            {
              console.log('delete unsuccessful fac prof') 
            console.log(err);
            }
            else
            {
              console.log('successfully deleted fac prof') 
              console.log(data);  
            }
          });
         res.status(200).json({
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
 getStudentAccounts,
 getFacultyAccounts,
 getFacultyProfiles,
 changeProfileStatus,
 deleteProfile,
 getAdminControlsData,
 updateAdminControls,
 createAdminControls
}