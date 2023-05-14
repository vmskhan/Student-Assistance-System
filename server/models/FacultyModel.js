const mongoose=require('mongoose');


const FacultySchema = new mongoose.Schema({
  facultyId:mongoose.SchemaTypes.ObjectId,
  deptId:mongoose.SchemaTypes.ObjectId,
  phoneNo:String,
  joiningDate:String,
  yearsOfExperience:String,
});

const Faculty = mongoose.model("Faculty", FacultySchema);


module.exports =  Faculty;
