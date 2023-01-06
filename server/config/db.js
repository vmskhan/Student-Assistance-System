const mongoose=require('mongoose');

const connectDB=mongoose.connect("mongodb+srv://shahbaaz:lPMx0WNDlXiHJU2B@cluster0.sozlilq.mongodb.net/test");


module.exports = connectDB;
