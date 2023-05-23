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

const updateStudentMarksInSection =asyncHandler( async(req,res) =>{
  const {studentId,userId,subjectName,
    subjectId,percentage,firstInternal,
    secondInternal,assignments,sectionId}=req.body;
  let data={
    studentId,userId,
    subjects:[
      {
        subjectName,
      subjectId,percentage,firstInternal,
      secondInternal,assignments
    }
    ]
  }
  console.log(sectionId)
  let mySection=await Section.findById(sectionId).lean();
  console.log(mySection)
  
  if(mySection.marks)
  {
    let myIndex;  
    myIndex=mySection.marks.findIndex((stud)=>stud.studentId===studentId);
    if(myIndex===-1)
      mySection.marks.push(data);
    else
    {
      let mySubIndex=mySection.marks[myIndex]?.subjects?.findIndex((sub)=>sub.subjectId===subjectId);
      if(mySubIndex)
      {
        if(mySubIndex!==-1)
        {
          mySection.marks[myIndex].subjects[mySubIndex]=data.subjects[0];
        }
        else
        {
          mySection.marks[myIndex].subjects.push(data.subjects[0]);
        }
      }
      else
      {
        mySection.marks[myIndex].subjects=[];
        mySection.marks[myIndex].subjects.push(data.subjects[0]);
      }
    }
  }
  else
  {
    mySection.marks=[];
    mySection.marks.push(data);
  }


  await Section.updateOne({_id:sectionId},mySection)
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
  updateStudentMarksInSection
}
