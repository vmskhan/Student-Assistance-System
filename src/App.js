import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import Notes from './component/Dropdown/Features/Notes';
import { BrowserRouter, Routes, useNavigate } from 'react-router-dom';
import { Route } from 'react-router-dom';
import StudentRouter from './component/Student/StudentRouter';
import AdminRouter from './component/Admin/AdminRouter'
import AdminHome from './component/Admin/AdminHome';
import AdminStudentProfiles from './component/Admin/AdminStudentProfiles';
import AdminControls from './component/Admin/AdminControls';
import Home from './component/Common/Home';

import StudentHome from './component/Student/StudentHome';
import StudentNotes from './component/Student/StudentNotes';
import StudentMockInterview from './component/Student/StudentMockInterview';
import StudentPerformance from './component/Student/StudentPerformance';
import StudentSelfLearn from './component/Student/StudentSelfLearn';
import StudentNotifications from './component/Student/StudentNotifications';
import StudentAttendance from './component/Student/StudentAttendance';
import FacultyRouter from './component/Faculty/FacultyRouter';
import FacultyHome from './component/Faculty/FacultyHome';
import FacultyNotes from './component/Faculty/FacultyNotes';
import AdminFacultyProfiles from './component/Admin/AdminFacultyProfiles';
import { Feature } from './component/Dropdown/Feature';
import Mock from './component/Dropdown/Features/Mock';
import Performance from './component/Dropdown/Features/Performance';
import Selflearn from './component/Dropdown/Features/Selflearn';
import Notify from './component/Dropdown/Features/Notify';
import Attendance from './component/Dropdown/Features/Attendance';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from './store/authSlice';
import Login from './component/Common/Login';
import StudentRegister from './component/Common/StudentRegister';
import FacultyRegister from './component/Common/FacultyRegister';
import StudentProfile from './component/Student/StudentProfile';
import FacultyProfile from './component/Faculty/FacultyProfile';
import AdminProfile from './component/Admin/AdminProfile';


const App = () => {
const isLoggedIn=useSelector(state=>state.auth.isLoggedIn);
const dispatch=useDispatch();
// const navigate=useNavigate();
useEffect(()=>{
  const user=JSON.parse(localStorage.getItem('userInfo'))
  if(user)
  {
    if(!isLoggedIn)
      dispatch(authActions.login());
      
    // navigate('/'+user.role+'/home');
  }
},[]);

useEffect(()=>{
console.log(isLoggedIn);
},[isLoggedIn]);
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/login' element={<Login/>} exact />
          <Route path='/StudentRegister' element={<StudentRegister />} exact />
          <Route path='/FacultyRegister' element={<FacultyRegister />} exact />
          <Route path='/' element={<Home />} exact />

          {isLoggedIn &&
          <>
          {/* <Route path='/basicForm' element={<LoginForm />} exact />
          <Route path='/Feature' element={< Feature />} exact >
            <Route path="Notes" element={<Notes/>} exact/>
            <Route path="Mock" element={<Mock/>} exact/>
            <Route path="Performance" element={<Performance/>} exact/>
            <Route path="Selflearn" element={<Selflearn/>} exact/>
            <Route path="Notify" element={<Notify/>} exact/>
            <Route path="Attendance" element={<Attendance/>} exact/>
          </Route> */}

          <Route path='/student' element={<StudentRouter />} exact>
            <Route path='home' element={<StudentHome />} exact />
            <Route path="Notes" element={<StudentNotes />} exact />
            <Route path="Mock" element={<StudentMockInterview />} exact />
            <Route path="Performance" element={<StudentPerformance />} exact />
            <Route path="Selflearn" element={<StudentSelfLearn />} exact />
            <Route path="Notifications" element={<StudentNotifications />} exact />
            <Route path="Attendance" element={<StudentAttendance />} exact />
            <Route path="Profile" element={<StudentProfile />} exact />
          </Route>
          <Route path='/Faculty' element={<FacultyRouter />} exact>
            <Route path='home' element={<FacultyHome />} exact />
            <Route path="Notes" element={<FacultyNotes />} exact />
            <Route path="Mock" element={<StudentMockInterview />} exact />
            <Route path="ClassPerformance" element={<StudentPerformance />} exact />
            <Route path="Selflearn" element={<StudentSelfLearn />} exact />
            <Route path="Notifications" element={<StudentNotifications />} exact />
            <Route path="Attendance" element={<StudentAttendance />} exact />
            <Route path="StudentDetails" element={<StudentAttendance />} exact />
            <Route path="Profile" element={<FacultyProfile />} exact />
          </Route>
          <Route path='/Admin' element={<AdminRouter />} exact>
            <Route path='home' element={<AdminHome />} exact />
            <Route path='StudentProfiles' element={<AdminStudentProfiles />} exact />
            <Route path='FacultyProfiles' element={<AdminFacultyProfiles />} exact />
            <Route path='Controls' element={<AdminControls />} exact />
            <Route path="Performance" element={<StudentPerformance />} exact />
            <Route path="Notifications" element={<StudentNotifications />} exact />
            <Route path="Attendance" element={<StudentAttendance />} exact />
            <Route path="Profile" element={<AdminProfile />} exact />
          </Route>
          </>
          }
        </Routes>
      </BrowserRouter>

    </>

  );
};

export default App;
