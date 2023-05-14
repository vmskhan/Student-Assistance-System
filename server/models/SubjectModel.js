const mongoose=require('mongoose');


const SubjectSchema = new mongoose.Schema({
  name:String,
  code:String,
  credits:Number,
  noOfSessions:Number,
  noOfHours:Number,
  courseId:mongoose.SchemaTypes.ObjectId,
  deptId:mongoose.SchemaTypes.ObjectId,
});

const Subject = mongoose.model("Subject", SubjectSchema);


module.exports =  Subject;
