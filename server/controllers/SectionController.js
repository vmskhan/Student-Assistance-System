const asyncHandler=require('express-async-handler');
const Section = require('../models/SectionModel');

const addNewSection =asyncHandler(async(req,res) => {

    const { name,year,sem,courseId}=req.body;
    // console.log(name,code);
  const newSection =await Section.create({
    name,year,sem,courseId
  });

    console.log(newSection);
    // console.log("reached");
    res.json({
      status:200,
      message:"New Section added successfully",
    });

});

const getSectionWithId=asyncHandler(async(req,res)=>{
   Section.findOne({_id:req.params.sectionId})
   .then((data)=>{
     if(data)
     {
       res.json({
         'Section':data,
       })
     }
   })
})


const getAllSections=asyncHandler(async(req,res)=>{
  Section.find().then((data)=>{
    if(data)
    {
      res.json({
        'Sections':data,
      })
    }
  });
})

const deleteParticularSection =asyncHandler(async (req,res)=>{
  Section.deleteOne({_id:req.params.sectionId }).then((data,err)=>{
    if(err){
      console.log(err);
    }
  })
  res.json({
    "message":"deleted successfully"
  })
});

const updateParticularSection =asyncHandler( async(req,res) =>{
    const {sectionId,name,year,sem,courseId,timeTableId}=req.body;
    let data={
        name,year,sem,courseId
    }
    if(timeTableId!=='Nil')
        data.timeTableId=timeTableId;
    await Section.updateOne({_id:sectionId},data)
        .then(result => {
      const { matchedCount, modifiedCount } = result;

    })
    .catch(err => console.error(`Failed to add review: ${err}`));
   res.json({
    "message":"sucessfully updated"
  })
});




module.exports = {
  addNewSection,
  getSectionWithId,
  deleteParticularSection,
  updateParticularSection,
  getAllSections,
}
