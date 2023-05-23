const mongoose=require('mongoose');

const SectionSchema = new mongoose.Schema({
  name:String,
  year:Number,
  sem:Number,
  courseId:mongoose.SchemaTypes.ObjectId,
  timeTableId:{
    type:mongoose.SchemaTypes.ObjectId,
    required:false,
  },
  marks:{
    type:Array,
    required:false,
  },
  attendance:{
    type:Array,
    required:false,
  },
});

const Section = mongoose.model("Section", SectionSchema);


module.exports =  Section;
