const mongoose=require('mongoose');


const registrationSchema = new mongoose.Schema({
  studentId:String,
  // eventName:String,
  fathersName:String,
  mothersName:String,
  phoneNumber:String,
  year:Number,
  branch:String,
  batch:String,
});

const Registration = mongoose.model("Registration", registrationSchema);


module.exports =   Registration;
