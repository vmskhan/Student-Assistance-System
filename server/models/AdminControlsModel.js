const mongoose=require('mongoose');


const adminControlsSchema = new mongoose.Schema({
  studProfStatus:{
   type: Boolean,
   default:true,
  },
  
  faclProfStatus:{
    type: Boolean,
    default:true,
   },
  rules:{
   type:Array,
  }
});

const AdminControls = mongoose.model("AdminControls", adminControlsSchema);


module.exports =   AdminControls;
