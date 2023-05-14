const express=require('express');
const { createNotes, getNotes, deleteNotes, getNotesByDeptId } = require('../controllers/NotesController');
const { getFacultyNotifications } = require('../controllers/NotificationController');
const { getFacultyDetails, updateFacultyDetails, getAllStudentDetailsWithSectionId } = require('../controllers/userController');
const {getAllDepartments}=require('./../controllers/DepartmentController');
const { getTimeTableForFaculty } = require('../controllers/TimeTableController');
const {getAllSections}=require("../controllers/SectionController");
const { getCourseWithDeptId } = require('../controllers/CourseController');
const { getAllSubjectsWithDeptId } = require('../controllers/SubjectController');
const {getStudentAccounts} =require("../controllers/AdminController");
const router=express.Router();

router.route('/notes').post(createNotes);
router.route('/notes/:deptId').get(getNotesByDeptId);
router.route('/notes/:id').delete(deleteNotes);
router.route('/notifications').get(getFacultyNotifications);
router.route('/profile/:id').get(getFacultyDetails);
router.route('/profile').put(updateFacultyDetails);
router.route('/departments').get(getAllDepartments);
router.route('/timeTable/:facultyId').get(getTimeTableForFaculty);
router.route('/sections').get(getAllSections);
router.route('/courses/:deptId').get(getCourseWithDeptId);
router.route('/subjects/:deptId').get(getAllSubjectsWithDeptId);
router.route('/studentProfiles/:sectionId').get(getAllStudentDetailsWithSectionId)
router.route('/studentAccounts').get(getStudentAccounts)
module.exports=router;