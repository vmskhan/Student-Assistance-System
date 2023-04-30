const express=require('express');
const { createNotes, getNotes, deleteNotes } = require('../controllers/NotesController');
const router=express.Router();

router.route('/notes').post(createNotes);
router.route('/notes').get(getNotes);
router.route('/notes/:id').delete(deleteNotes);
module.exports=router;