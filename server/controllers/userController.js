// const { ConflictResolutionMode } = require('@azure/cosmos');
const asyncHandler=require('express-async-handler');
const User=require('../models/userModel');
const generateToken = require('../utils/generateToken');
const upload=require('./../middlewares/upload');

const registerUser =asyncHandler(async(req,res) => {
    await upload(req,res);
    console.log(req);
    const {data} = req.body;
    let newUserData=JSON.parse(data);
    
    console.log('register user method called');
    const userExists= await User.findOne({email:newUserData.email});

    if(userExists){
        res.status(400)
        throw new Error('User Already Exists');
    }
    console.log('user doesnt exist');
    
    newUserData.status="active";
    console.log(req.files);
    if(req.files && req.files[0].filename)
        newUserData.pic=req.files[0].filename;

    const user=await User.create(newUserData);
        console.log('user created');
        console.log(user);
    if(user){
        res.status(201).json({
            _id:user.id,
            name:user.name,
            email:user.email,
            role:user.role,
            pic:user.pic,
            id:user.id,
            token: generateToken(user._id),
        });
        
    }
    else{
        res.status(400)
        throw new Error('Error Occurred! ');
    }

});




const authUser =asyncHandler(async(req,res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email});
    console.log(user);
    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            status:user.status,
            pic: user.pic,
            token: generateToken(user._id),
        });
        
        }
        else{
            res.status(400);
            res.send("Invalid Email or Password");
        }

});

const findAllUsers= asyncHandler(async(req,res) => {
    const userList=await User.find({'isAdmin':false});
    if(userList){
        res.status(200).json({
            'users':userList,
        });
    }
    else
    {
        res.status(400);
        throw new Error("NO users found");
    }
})

module.exports={ registerUser , authUser, findAllUsers};