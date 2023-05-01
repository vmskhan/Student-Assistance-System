const path=require('path');
const express=require("express");
const { addEventRegistration} = require("../controllers/RegistrationController");
const router=express.Router();
const { authUser, registerUser } = require('../controllers/userController');
const { getNotes } = require('../controllers/NotesController');
const { getUserNotifications } = require('../controllers/NotificationController');


// //registration routes

// router.post("/Registration",upload.single("PaymentScreenshot"),addEventRegistration);

// //event routes

// router.route('/Event').get();
// router.route('/Event/:state').get()

// //project routes
// router.route('/Project').get();

router.route('/login').post(authUser);
router.route('/register').post(registerUser);
router.route('/notes').get(getNotes);
router.route('/notifications').get(getUserNotifications);

module.exports = router;
