const mongoose=require('mongoose');

const NotesModel = new mongoose.Schema({
    title:String,
    description:String,
    author:String,
    createdBy:String,
    semester:Number,
    year:Number,
    fileLink:String,
    subjectId:String,
});

const Notes = mongoose.model("Notes", NotesModel);


module.exports = Notes;
