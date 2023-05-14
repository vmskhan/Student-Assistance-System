const express=require("express");

const { changeProfileStatus, deleteProfile, getAdminControlsData, updateAdminControls, createAdminControls, getStudentAccounts, getFacultyAccounts, getFacultyProfiles}=require('./../controllers/AdminController');
const { getNotifications, createNotification, deleteNotification } = require("../controllers/NotificationController");
const { getAllDepartments, updateParticularDepartment, deleteParticularDepartment, addNewDepartment } = require("../controllers/DepartmentController");
const { getAllCourses, addNewCourse, updateParticularCourse, deleteParticularCourse } = require("../controllers/CourseController");
const { getAllSubjects, addNewSubject, updateParticularSubject, deleteParticularSubject } = require("../controllers/SubjectController");
const { getAllSections, addNewSection, updateParticularSection, deleteParticularSection } = require("../controllers/SectionController");
const { getAllTimeTables, getTimeTableWithSection, addNewTimeTable, updateParticularTimeTable, deleteParticularTimeTable } = require("../controllers/TimeTableController");


const router=express.Router();


router.route('/getStudentAccounts').get(getStudentAccounts);
router.route('/getFacultyAccounts').get(getFacultyAccounts);
router.route('/getFacultyProfiles').get(getFacultyProfiles);
router.route('/updateAccStatus').put(changeProfileStatus);
router.route('/deleteAccount/:accId').delete(deleteProfile);

router.route('/getAdminControls').get(getAdminControlsData);
router.route('/updateAdminControls').put(updateAdminControls);
router.route('/createAdminControls').post(createAdminControls);

router.route('/notifications').get(getNotifications);
router.route('/notifications').post(createNotification);
router.route('/notifications/:id').delete(deleteNotification);

router.route('/departments').get(getAllDepartments);
// router.route('/departments/:deptId').get(getDepartmentWithId);
router.route('/departments').post(addNewDepartment);
router.route('/departments').put(updateParticularDepartment);
router.route('/departments/:deptId').delete(deleteParticularDepartment);

router.route('/courses').get(getAllCourses);
router.route('/courses').post(addNewCourse);
router.route('/courses').put(updateParticularCourse);
router.route('/courses/:courseId').delete(deleteParticularCourse);

router.route('/subjects').get(getAllSubjects);
router.route('/subjects').post(addNewSubject);
router.route('/subjects').put(updateParticularSubject);
router.route('/subjects/:subjectId').delete(deleteParticularSubject);

router.route('/sections').get(getAllSections);
router.route('/sections').post(addNewSection);
router.route('/sections').put(updateParticularSection);
router.route('/sections/:sectionId').delete(deleteParticularSection);

// router.route('/timeTables').get(getAllTimeTables);
router.route('/timeTables/:sectionId').get(getTimeTableWithSection);
router.route('/timeTables').post(addNewTimeTable);
router.route('/timeTables').put(updateParticularTimeTable);
router.route('/timeTables/:timeTableId').delete(deleteParticularTimeTable);

module.exports = router;
