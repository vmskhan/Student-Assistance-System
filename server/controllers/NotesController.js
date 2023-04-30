const fs=require('fs');
const Notes=require('./../models/NotesModel');
const asyncHandler=require('express-async-handler');
const upload=require('./../middlewares/upload');
const path = require('path');
const uploadDir=path.join(__dirname,"./../storage/images/uploads/");
const createNotes =asyncHandler(async(req,res) => {
    await upload(req,res);
    console.log(req);
    const {data} = req.body;
    let newNotesData=JSON.parse(data);
    
    console.log('create notes method called');
    
    console.log(req.files);
    if(req.files && req.files[0].filename)
        newNotesData.fileLink=req.files[0].filename;
        let d=new Date();
    newNotesData.creationDate=d.toString();
    // console.log(newNotesData);
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

const deleteNotes =asyncHandler(async(req,res) => {
    
    Notes.findByIdAndDelete({_id:req.params.id})
    .then((data,err)=>{
        if(err)
        {
            res.status(500)
            throw new Error('Error Occurred!');    
        }
        // console.log(data);
        // console.log(req.params.id);
        if(data)
        {
            if(data.fileLink!=='Nil' && fs.existsSync(uploadDir+data.fileLink))
                fs.unlink(uploadDir+data.fileLink,(err)=>console.log(err));
            res.status(201).json({
                "message":"notes deleted successfully",
            });
        }   
    });
});

module.exports={
    createNotes,
    getNotes,
    deleteNotes
};