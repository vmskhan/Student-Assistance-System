const asyncHandler=require('express-async-handler');
const Department = require('../models/DepartmentModel');


const addNewDepartment =asyncHandler(async(req,res) => {

    const {name,code}=req.body;
    console.log(name,code);
  const newDept =await Department.create({
    name,code
  });

    console.log(newDept);
    // console.log("reached");
    res.json({
      status:200,
      message:"New Department added successfully",
    });

});

const getDepartmentWithId=asyncHandler(async(req,res)=>{
   Department.findOne({_id:req.params.deptId})
   .then((data)=>{
     if(data)
     {
       res.json({
         'Department':data,
       })
     }
   })
})


const getAllDepartments=asyncHandler(async(req,res)=>{
  Department.find().then((data)=>{
    if(data)
    {
      res.json({
        'Departments':data,
      })
    }
  });
})

const deleteParticularDepartment =asyncHandler(async (req,res)=>{
  Department.deleteOne({_id:req.params.deptId }).then((data,err)=>{
    if(err){
      console.log(err);
    }
  })
  res.json({
    "message":"deleted successfully"
  })
});

const updateParticularDepartment =asyncHandler( async(req,res) =>{
    const {deptId,name,code}=req.body;
    await Department.updateOne({_id:deptId},{name,code})
        .then(result => {
      const { matchedCount, modifiedCount } = result;

    })
    .catch(err => console.error(`Failed to add review: ${err}`));
   res.json({
    "message":"sucessfully updated"
  })
});




module.exports = {
  addNewDepartment,
  getDepartmentWithId,
  deleteParticularDepartment,
  updateParticularDepartment,
  getAllDepartments,
}
