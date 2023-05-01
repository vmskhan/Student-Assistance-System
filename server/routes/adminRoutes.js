const express=require("express");

const {getStudentProfiles, 
  getFacultyProfiles, 
  changeProfileStatus, 
  deleteProfile,
  getAdminControlsData,
  updateAdminControls,
  createAdminControls}=require('./../controllers/AdminController');
const { getNotifications, createNotification, deleteNotification } = require("../controllers/NotificationController");

const router=express.Router();


router.route('/getStudents').get(getStudentProfiles);
router.route('/getFaculty').get(getFacultyProfiles);
router.route('/updateAccStatus').put(changeProfileStatus);
router.route('/deleteProfile/:accId').delete(deleteProfile);
router.route('/getAdminControls').get(getAdminControlsData);
router.route('/updateAdminControls').put(updateAdminControls);
router.route('/createAdminControls').post(createAdminControls);

router.route('/notifications').get(getNotifications);
router.route('/notifications').post(createNotification);
router.route('/notifications/:id').delete(deleteNotification);

module.exports = router;
