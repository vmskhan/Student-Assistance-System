const mongoose=require('mongoose');

const NotificationModel = new mongoose.Schema({
    title:String,
    description:String,
    documentLink:String,
    externalLink:String,
    issuedFor:String,
    issuedBy:String,
    issuedDate:String,
});

const Notification = mongoose.model("Notification", NotificationModel);


module.exports = Notification;
