const asyncHandler=require('express-async-handler');
const Course = require('../models/CourseModel');

const addNewCourse =asyncHandler(async(req,res) => {

    const {name,code,intake,deptId}=req.body;
    // console.log(name,code);
  const newCourse =await Course.create({
    name,code,intake,deptId
  });

    console.log(newCourse);
    // console.log("reached");
    res.json({
      status:200,
      message:"New Course added successfully",
    });

});

const getCourseWithId=asyncHandler(async(req,res)=>{
   Course.findOne({_id:req.params.courseId})
   .then((data)=>{
     if(data)
     {
       res.json({
         'Course':data,
       })
     }
   })
})


const getAllCourses=asyncHandler(async(req,res)=>{
  Course.find().then((data)=>{
    if(data)
    {
      res.json({
        'Courses':data,
      })
    }
  });
})

const deleteParticularCourse =asyncHandler(async (req,res)=>{
  Course.deleteOne({_id:req.params.courseId }).then((data,err)=>{
    if(err){
      console.log(err);
    }
  })
  res.json({
    "message":"deleted successfully"
  })
});

const updateParticularCourse =asyncHandler( async(req,res) =>{
    const {courseId,name,code,intake,deptId}=req.body;
    await Course.updateOne({_id:courseId},{name,code,intake,deptId})
        .then(result => {
      const { matchedCount, modifiedCount } = result;

    })
    .catch(err => console.error(`Failed to add review: ${err}`));
   res.json({
    "message":"sucessfully updated"
  })
});

const getCourseWithDeptId=asyncHandler(async(req,res)=>{
  Course.find({'deptId':req.params.deptId})
  .then((data)=>{
    if(data)
    {
      res.json({
        'Courses':data,
      })
    }
  })
})


module.exports = {
  addNewCourse,
  getCourseWithId,
  deleteParticularCourse,
  updateParticularCourse,
  getAllCourses,
  getCourseWithDeptId
}
