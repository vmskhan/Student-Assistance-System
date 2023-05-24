const express=require("express");
const router=express.Router();
const { authUser, registerUser, getStudentDetails, updateStudentDetails } = require('../controllers/userController');
const { getNotes } = require('../controllers/NotesController');
const { getUserNotifications } = require('../controllers/NotificationController');
const { getAllCourses } = require("../controllers/CourseController");
const { getAllSections, getMarksWithSectionId } = require("../controllers/SectionController");

router.route('/login').post(authUser);
router.route('/register').post(registerUser);
router.route('/notes').get(getNotes);
router.route('/notifications').get(getUserNotifications);
router.route('/profile/:id').get(getStudentDetails);
router.route('/profile').put(updateStudentDetails);
router.route('/courses').get(getAllCourses);
router.route('/sections').get(getAllSections);
router.route('/sections/marks').post(getMarksWithSectionId);
module.exports = router;
