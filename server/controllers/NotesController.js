const fs=require('fs');
const Notes=require('./../models/NotesModel');
const asyncHandler=require('express-async-handler');
const upload=require('./../middlewares/upload');

const createNotes =asyncHandler(async(req,res) => {
    await upload(req,res);
    console.log(req);
    const {data} = req.body;
    let newNotesData=JSON.parse(data);
    
    console.log('create notes method called');
    
    console.log(req.files);
    if(req.files && req.files[0].filename)
        newNotesData.fileLink=req.files[0].filename;

    const Note=await Notes.create(newNotesData);
        console.log('Notes created');
        console.log(Note);
    if(Note){
        res.status(201).json({
            message:"notes created successfully"
        });
        
    }
    else{
        res.status(400)
        throw new Error('Error Occurred!');
    }

});

const getNotes =asyncHandler(async(req,res) => {
    
    const NotesList=await Notes.find();
        console.log('Notes found');
        console.log(NotesList);
    if(NotesList){
        res.status(201).json({
            "notes":NotesList,
        });
        
    }
    else{
        res.status(400)
        throw new Error('Error Occurred!');
    }

});

module.exports={
    createNotes,
    getNotes
};