const asyncHandler=require('express-async-handler');
const Subject = require('../models/SubjectModel');


const addNewSubject =asyncHandler(async(req,res) => {

    const {name,code,credits,noOfSessions,noOfHours,courseId,deptId}=req.body;
    // console.log(name,code);
  const newSubject =await Subject.create({
    name,code,credits,noOfSessions,noOfHours,courseId,deptId
  });

    console.log(newSubject);
    // console.log("reached");
    res.json({
      status:200,
      message:"New Subject added successfully",
    });

});

const getSubjectWithId=asyncHandler(async(req,res)=>{
   Subject.findOne({_id:req.params.subjectId})
   .then((data)=>{
     if(data)
     {
       res.json({
         'Subject':data,
       })
     }
   })
})

const getAllSubjectsWithDeptId=asyncHandler(async(req,res)=>{
  Subject.find({'deptId':req.params.deptId})
  .then((data)=>{
    if(data)
    {
      res.json({
        'Subjects':data,
      })
    }
  })
})

const getAllSubjects=asyncHandler(async(req,res)=>{
  Subject.find().then((data)=>{
    if(data)
    {
      res.json({
        'Subjects':data,
      })
    }
  });
})

const deleteParticularSubject =asyncHandler(async (req,res)=>{
  Subject.deleteOne({_id:req.params.subjectId }).then((data,err)=>{
    if(err){
      console.log(err);
    }
  })
  res.json({
    "message":"deleted successfully"
  })
});

const updateParticularSubject =asyncHandler( async(req,res) =>{
    const {subjectId,name,code,credits,noOfSessions,noOfHours,courseId,deptId}=req.body;
    await Subject.updateOne({_id:subjectId},{name,code,credits,noOfSessions,noOfHours,courseId,deptId})
        .then(result => {
      const { matchedCount, modifiedCount } = result;

    })
    .catch(err => console.error(`Failed to add review: ${err}`));
   res.json({
    "message":"sucessfully updated"
  })
});




module.exports = {
  addNewSubject,
  getSubjectWithId,
  deleteParticularSubject,
  updateParticularSubject,
  getAllSubjects,
  getAllSubjectsWithDeptId,
}
