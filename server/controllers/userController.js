// const { ConflictResolutionMode } = require('@azure/cosmos');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const generateToken = require('../utils/generateToken');
const upload = require('./../middlewares/upload');
const Faculty = require('../models/FacultyModel');
const Student = require('../models/StudentModel');
const Course = require('../models/CourseModel');
const Section = require('../models/SectionModel');
const TimeTable = require('../models/TimeTableModel');
const periods = ['1', '2', '3', '4', '5', '6'];
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const registerUser = asyncHandler(async (req, res) => {
    await upload(req, res);
    console.log(req);
    const { data } = req.body;
    let newUserData = JSON.parse(data);

    console.log('register user method called');
    const userExists = await User.findOne({ email: newUserData.email });

    if (userExists) {
        res.status(400)
        res.json({ 'message': 'User Already Exists' });
    }
    console.log('user doesnt exist');

    newUserData.status = "active";
    // console.log(req.files);
    if (req.files.length > 0 && req.files[0].filename)
        newUserData.pic = req.files[0].filename;

    const user = await User.create(newUserData);
    console.log('user created');
    console.log(user);
    if (user) {
        if (user.role === 'faculty')
            Faculty.create({
                facultyId: user._id,
                deptId: null,
                phoneNo: 'N/A',
                joiningDate: '',
                yearsOfExperience: 0,
            });
        else if (user.role === 'student')
            Student.create({
                studentId: user._id,
                fathersName: "N/A",
                mothersName: "N/A",
                phoneNumber: "N/A",
                courseId: null,
                batch: "N/A",
                sectionId: null,
                marks: {},
                attendance: {},
            });
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            pic: user.pic,
            userId: user.userId,
            status: user.status,
            token: generateToken(user._id),
        });

    }
    else {
        res.status(400)
        res.json({ 'message': 'Error Occurred! ' });
    }

});




const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    console.log(user);
    if (user && user.status === 'inactive') {
        res.status(400);
        res.json({ 'message': "Account Disabled" });
    }
    else if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            userId: user.userId,
            name: user.name,
            email: user.email,
            role: user.role,
            status: user.status,
            pic: user.pic,
            token: generateToken(user._id),
        });

    }
    else {
        res.status(400);
        res.json({ 'message': "Invalid Email or Password" });
    }

});

const findAllUsers = asyncHandler(async (req, res) => {
    const userList = await User.find({ 'isAdmin': false });
    if (userList) {
        res.status(200).json({
            'users': userList,
        });
    }
    else {
        res.status(400);
        throw new Error("NO users found");
    }
})

const getFacultyDetails = asyncHandler(async (req, res) => {
    const faculty = await Faculty.findOne({ 'facultyId': req.params.id });
    if (faculty) {
        res.status(200).json({
            'facultyProfile': faculty,
        });
    }
    else {
        res.status(400);
        throw new Error("NO faculty profile found");
    }
})

const updateFacultyDetails = asyncHandler(async (req, res) => {
    const { facultyId, deptId, joiningDate, phoneNo, yearsOfExperience } = req.body;
    await Faculty.findOneAndUpdate({ 'facultyId': facultyId }, { deptId, joiningDate, phoneNo, yearsOfExperience })
        .then((faculty, err) => {
            if (faculty) {
                res.status(200).json({
                    'message': 'faculty profile updated successfully',
                });
            }
            else {
                res.status(400);
                throw new Error("faculty profile update unsuccessful");
            }
        });

})

const getStudentDetails = asyncHandler(async (req, res) => {
    const student = await Student.findOne({ 'studentId': req.params.id }).lean();
    student.courseName = "N/A";
    student.sectionName = "N/A";
    student.year = "N/A";
    student.sem = "N/A";

    if (student.courseId !== null) {
        let tCourse = await Course.findById(student.courseId);
        student.courseName = tCourse.name + " - " + tCourse.code;
    }
    if (student.sectionId !== null) {
        let tSection = await Section.findById(student.sectionId);
        student.sectionName = tSection.sem + " sem-" + tSection.name + " section";
        student.year = tSection.year;
        student.sem = tSection.sem;
    }


    if (student) {
        res.status(200).json({
            'studentProfile': student,
        });
    }
    else {
        res.status(400);
        throw new Error("NO Student profile found");
    }
})

const updateStudentDetails = asyncHandler(async (req, res) => {
    const { studentId, fathersName, mothersName, phoneNumber, batch, sectionId, courseId } = req.body;
    let tt = await TimeTable.findOne({ 'sectionId': sectionId }).lean();
    // console.log(tt)
    let marks = {};
    let data = { fathersName, mothersName, phoneNumber, batch, sectionId, courseId }
    let studProf = await Student.findOne({ 'studentId': studentId }).lean();
    // console.log(studProf);
    // console.log('marks' in studProf);
    if ('marks' in studProf)
        marks = studProf.marks;
    days.map((day) => {
        if (day in tt.periods) {
            tt.periods[day].map((period) => {
                if (!(period.subjectName in marks)) {
                    console.log('yes')
                    marks[period.subjectName] = {
                        'subjectId': period.subjectId,
                        'subjectName': period.subjectName,
                    };
                }
            })
        }
    });
    data.marks = marks;
    await Student.findOneAndUpdate({ 'studentId': studentId }, data)
        .then((student, err) => {
            if (err) {
                res.status(400).json({
                    'message': err,
                });
                throw new Error("faculty profile update unsuccessful");

            }
            else {
                res.status(200).json({
                    'message': 'student profile updated successfully',
                });
            }
        });
})


const getAllStudentDetailsWithSectionId = asyncHandler(async (req, res) => {
    const student = await Student.find({ 'sectionId': req.params.sectionId }).lean();


    // if(student.courseId!==null)
    // {
    //     let tCourse=await Course.findById(student.courseId);
    //     student.courseName=tCourse.name+" - "+tCourse.code;
    // }
    // if(student.sectionId!==null)
    // {
    //     let tSection=await Section.findById(student.sectionId);
    //     student.sectionName=tSection.sem+" sem-"+tSection.name+" section";
    //     student.year=tSection.year;
    //     student.sem=tSection.sem;
    // }


    if (student) {
        res.status(200).json({
            'studentProfiles': student,
        });
    }
    else {
        res.status(400);
        throw new Error("NO Student profile found");
    }
})

const getAllStudentAccountsWithSectionId = asyncHandler(async (req, res) => {
    const studentProfiles = await Student.find({ 'sectionId': req.params.sectionId }).lean();
    // console.log(req.params.sectionId);
    // console.log(studentProfiles);

    let studentAccounts = [];
    const StudAccs = await User.find({ 'role': 'student' }).lean();
    // console.log(StudAccs);
    studentProfiles?.map((s) => {
        let k = StudAccs?.filter((acc) => acc._id == s.studentId)?.[0];
        // console.log(k);
        if (k)
            studentAccounts.push(k);
    });

    if (studentAccounts) {
        res.status(200).json({
            'studentAccounts': studentAccounts,
        });
    }
    else {
        res.status(400);
        throw new Error("NO Student profile found");
    }
})



module.exports = {
    registerUser,
    authUser,
    findAllUsers,
    getFacultyDetails,
    updateFacultyDetails,
    getStudentDetails,
    updateStudentDetails,
    getAllStudentDetailsWithSectionId,
    getAllStudentAccountsWithSectionId
};