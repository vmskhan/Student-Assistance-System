const fs=require('fs');
const Notification=require('./../models/NotificationModel');
const asyncHandler=require('express-async-handler');
const upload=require('./../middlewares/upload');
const path = require('path');
const uploadDir=path.join(__dirname,"./../storage/images/uploads/");

const createNotification =asyncHandler(async(req,res) => {
    await upload(req,res);
    console.log(req);
    const {data} = req.body;
    let newNotificationData=JSON.parse(data);
    
    console.log('create notification method called');
    
    console.log(req.files);
    if(req.files && req.files.length>0 && req.files[0].filename)
        newNotificationData.documentLink=req.files[0].filename;
        let d=new Date();
    newNotificationData.issuedDate=d.toLocaleString();
    // console.log(newNotesData);
    const Notif=await Notification.create(newNotificationData);
        console.log('Notification created');
        console.log(Notif);
    if(Notif){
        res.status(201).json({
            message:"notification created successfully"
        });
        
    }
    else{
        res.status(400)
        throw new Error('Error Occurred!');
    }

});

const getNotifications =asyncHandler(async(req,res) => {
    
    const NotifList=await Notification.find();
        console.log('Notifications found');
        console.log(NotifList);
    if(NotifList){
        res.status(201).json({
            "notifications":NotifList,
        });
        
    }
    else{
        res.status(400)
        throw new Error('Error Occurred!');
    }

});

const deleteNotification =asyncHandler(async(req,res) => {
    
    Notification.findByIdAndDelete({_id:req.params.id})
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
            if(data.documentLink!=='Nil' && fs.existsSync(uploadDir+data.documentLink))
                fs.unlink(uploadDir+data.documentLink,(err)=>console.log(err));
            res.status(201).json({
                "message":"notification deleted successfully",
            });
        }   
    });
});

const getUserNotifications =asyncHandler(async(req,res) => {
    
    const NotifList=await Notification.find({issuedFor:'Students'});
        console.log('Notifications found');
        console.log(NotifList);
    if(NotifList){
        res.status(201).json({
            "notifications":NotifList,
        });
        
    }
    else{
        res.status(400)
        throw new Error('Error Occurred!');
    }

});

const getFacultyNotifications =asyncHandler(async(req,res) => {
    
    const NotifList=await Notification.find({issuedFor:'Faculty'});
        console.log('Notifications found');
        console.log(NotifList);
    if(NotifList){
        res.status(201).json({
            "notifications":NotifList,
        });
        
    }
    else{
        res.status(400)
        throw new Error('Error Occurred!');
    }

});

module.exports={
    createNotification,
    getNotifications,
    deleteNotification,
    getUserNotifications,
    getFacultyNotifications
};