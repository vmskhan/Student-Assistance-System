const asyncHandler=require('express-async-handler');
const TimeTable = require('../models/TimeTableModel');
const Section = require('../models/SectionModel');
const Course = require('../models/CourseModel');
const _=require('lodash');
const addNewTimeTable =asyncHandler(async(req,res) => {

    const {courseId,classIncharge,sectionId,academicYear,phoneNo,periods,fids,sids}=req.body;
    console.log(sectionId);
    const existingTimeTable=await TimeTable.findOne({'sectionId':sectionId});
    if(existingTimeTable)
    {
        res.status(400).json({
            'message':'time table for section alreday exists',
        })
    }
    else{
        const newTimeTable =await TimeTable.create({
            courseId,classIncharge,sectionId,academicYear,phoneNo,periods,fids,sids
        });

            console.log(newTimeTable);
            await Section.findByIdAndUpdate(sectionId,{'timeTableId':newTimeTable._id});
            // console.log("reached");
            res.json({
            status:200,
            message:"New TimeTable added successfully",
            });
    }
});

const getTimeTableWithId=asyncHandler(async(req,res)=>{
   TimeTable.findOne({_id:req.params.timeTableId})
   .then((data)=>{
    console.log(data);
     if(data)
     {
       res.json({
         'TimeTable':data,
       })
     }
     else
     {
      res.json({
        'TimeTable':{},
      })
     }
   })
})

const getTimeTableWithSection=asyncHandler(async(req,res)=>{
    TimeTable.findOne({'sectionId':req.params.sectionId})
    .then((data)=>{
      // console.log(data);
      if(data)
      {
        res.json({
          'TimeTable':data,
        })
      }
      else
      {
        res.json({
          'TimeTable':{},
          'message':'time table does not exist',
        })
      }
    })
 })

const getAllTimeTables=asyncHandler(async(req,res)=>{
  TimeTable.find().then((data)=>{
    if(data)
    {
      res.json({
        'TimeTables':data,
      })
    }
  });
})

const deleteParticularTimeTable =asyncHandler(async (req,res)=>{
  TimeTable.deleteOne({_id:req.params.timeTableId }).then((data,err)=>{
    if(err){
      console.log(err);
    }
  })
  res.json({
    "message":"deleted successfully"
  })
});

const updateParticularTimeTable =asyncHandler( async(req,res) =>{
    const {_id,courseId,classIncharge,sectionId,academicYear,phoneNo,periods,fids,sids}=req.body;
    console.log(sectionId);
    await TimeTable.updateOne({_id:_id},{courseId,classIncharge,sectionId,academicYear,phoneNo,periods,fids,sids})
        .then(result => {
      const { matchedCount, modifiedCount } = result;

    })
    .catch(err => console.error(`Failed to add review: ${err}`));
   res.json({
    "message":"sucessfully updated"
  })
});


const getTimeTableForFaculty=asyncHandler(async(req,res)=>{
  const periods=['1','2','3','4','5','6'];
  const days=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  
  let data=await TimeTable.find({'fids': {$in:[req.params.facultyId]}});
    if(data)
    {
      
      let tts={};
      let classIncharge="";
      let classesAssigned=[];
      let subjectsAssigned=[];
     await Promise.all(days.map(async(day)=>{
        
        await Promise.all(data.map(async(tt)=>{
          let tSection=await Section.findById(tt.sectionId);
          let tCourse=await Course.findById(tSection.courseId);
          if(tt.classIncharge==req.params.facultyId)
            classIncharge=tt.sectionId;
          if(!classesAssigned.some((c)=>c===tt.sectionId))
            classesAssigned.push(tt.sectionId);

         if(day in tt.periods)
          {
            if(!(day in tts))
              tts[day]=[];

            tt.periods[day].map((period)=>{
              if(period.teacherId===req.params.facultyId)
              {
                let secName=tCourse.code+"-"+tSection.sem+" sem-"+tSection.name+" section";
                period.sectionId=tt.sectionId;
                period.sectionName=secName;
                tts[day].push(period);
                if(!subjectsAssigned.some((s)=>s.subjectId===period.subjectId))
                {    
                  
                  subjectsAssigned.push({
                    'subjectId':period.subjectId,
                    'subjectName':period.subjectName,
                    'sectionId':period.sectionId,
                    'sectionName':secName,
                  });
                }
              }
            })
          }  
        
        }));
        
      }));
      
        let facTimeTable={
          'periods':_.cloneDeep(tts),
          'classInchargeForSection':classIncharge,
          'classesAssigned':classesAssigned,
          'subjectsAssigned':subjectsAssigned,
          }
          res.json({
            'TimeTable':facTimeTable,
          });
      
    }

})


module.exports = {
  addNewTimeTable,
  getTimeTableWithId,
  getTimeTableWithSection,
  deleteParticularTimeTable,
  updateParticularTimeTable,
  getAllTimeTables,
  getTimeTableForFaculty,
}
