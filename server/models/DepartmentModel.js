const mongoose=require('mongoose');


const DepartmentSchema = new mongoose.Schema({
  name:String,
  code:String,
});

const Department = mongoose.model("Department", DepartmentSchema);


module.exports =  Department;
