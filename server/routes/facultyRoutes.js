const express=require('express');
const { createNotes, getNotes, deleteNotes } = require('../controllers/NotesController');
const { getFacultyNotifications } = require('../controllers/NotificationController');
const router=express.Router();

router.route('/notes').post(createNotes);
router.route('/notes').get(getNotes);
router.route('/notes/:id').delete(deleteNotes);
router.route('/notifications').get(getFacultyNotifications);
module.exports=router;