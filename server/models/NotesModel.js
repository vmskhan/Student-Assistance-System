const mongoose=require('mongoose');

const NotesModel = new mongoose.Schema({
    title:String,
    description:String,
    author:String,
    createdBy:String,
    semester:Number,
    year:Number,
    fileLink:String,
    subjectId:mongoose.SchemaTypes.ObjectId,
    deptId:mongoose.SchemaTypes.ObjectId,
    creationDate:String,
});

const Notes = mongoose.model("Notes", NotesModel);


module.exports = Notes;
