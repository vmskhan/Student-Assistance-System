const mongoose=require('mongoose');


const TimeTableSchema = new mongoose.Schema({
    courseId:mongoose.SchemaTypes.ObjectId,
    classIncharge:mongoose.SchemaTypes.ObjectId,
    sectionId:mongoose.SchemaTypes.ObjectId,
    academicYear:String,
    phoneNo:String,
    periods:{
        type:Object,
        required:false,
        default:{},
    },
    fids:{
        type:Array,
        required:false,
        default:[],
    },
    sids:{
        type:Array,
        required:false,
        default:[],
    }
});

const TimeTable = mongoose.model("TimeTable", TimeTableSchema);


module.exports =  TimeTable;
