const mongoose=require('mongoose');


const CourseSchema = new mongoose.Schema({
  name:String,
  code:String,
  intake:Number,
  deptId:mongoose.SchemaTypes.ObjectId,
});

const Course = mongoose.model("Course", CourseSchema);


module.exports =  Course;
