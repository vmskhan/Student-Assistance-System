const mongoose=require('mongoose');


const StudentSchema = new mongoose.Schema({
  studentId:String,
  fathersName:String,
  mothersName:String,
  phoneNumber:String,
  courseId:mongoose.SchemaTypes.ObjectId,
  batch:String,
  sectionId:mongoose.SchemaTypes.ObjectId,
  marks:Object,
  attendance:Object,
});

const Student = mongoose.model("Student", StudentSchema);


module.exports =  Student;
