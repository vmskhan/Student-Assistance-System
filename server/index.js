
const path=require('path');
const express = require("express");
const userRoutes=require('./routes/userRoutes');
const adminRoutes= require('./routes/adminRoutes');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');
const PORT = process.env.PORT || 3001;
const dotenv=require("dotenv");
var multer = require('multer');
const connectDB=require("./config/db");
const morgan=require("morgan");
const fs=require('fs');
// const {addNewRegistration}=require("./controllers/adminController");
const bodyParser=require('body-parser');

// fs.writeFile("./public/jsonFiles/data.json",JSON.stringify({name:"shah",rollno:12345,imgUrl:'logo512.png'}),()=>{
//   console.log('done');
// });
var upload = multer();


const app=express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use("/upload",express.static("./../uploads"));
dotenv.config();

// connectDB();

app.use(express.json());
app.use(morgan('dev'));

// app.use(bodyParser.json());

// for parsing application/xwww-
// app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

// for parsing multipart/form-data
// app.use(upload.array());
// app.use(express.static('public'))

app.use(express.static(path.resolve(__dirname,'../build')));

app.get("/api",(req,res) =>{
    res.json({ message: "Hello from server!"});
});
app.use('/api/users',userRoutes);
app.use('/api/admin',adminRoutes);
app.get('*', function(req, res) {
    res.sendFile('index.html', {root: path.join(__dirname, '../build/')});
  });

app.use((error, req, res, next) => {
    console.log('This is the rejected field ->', error);
  });

app.use(notFound);
// app.use(errorHandler);


// addNewRegistration();

app.listen(PORT,() =>{
    console.log(`server runnig at port ${PORT}`);
});
