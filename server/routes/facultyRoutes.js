const express=require('express');
const { createNotes, getNotes } = require('../controllers/NotesController');
const router=express.Router();

router.route('/notes').post(createNotes);
router.route('/notes').get(getNotes);
module.exports=router;