const path=require('path');
const express=require("express");
const { addEventRegistration} = require("../controllers/RegistrationController");
const router=express.Router();
var multer = require('multer');
const { authUser, registerUser } = require('../controllers/userController');

// var upload = multer({
//   storage:multer.diskStorage({
//     destination:(req,file,cb)=>{
//       cb(null,path.join(__dirname,'./../../build/images'));
//     },
//     filename:function(req,file,callback){
//       callback(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname))
//     }
//   })

// });

// //registration routes

// router.post("/Registration",upload.single("PaymentScreenshot"),addEventRegistration);

// //event routes

// router.route('/Event').get();
// router.route('/Event/:state').get()

// //project routes
// router.route('/Project').get();

router.route('/login').post(authUser);
router.route('/register').post(registerUser);

module.exports = router;
