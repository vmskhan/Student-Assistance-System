import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, useNavigate } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from './store/authSlice';

import Home from './component/Common/Home';
import Login from './component/Common/Login';
import StudentRegister from './component/Common/StudentRegister';
import FacultyRegister from './component/Common/FacultyRegister';

import StudentRouter from './component/Student/StudentRouter';
import StudentHome from './component/Student/StudentHome';
import StudentNotes from './component/Student/StudentNotes';
import StudentMockInterview from './component/Student/StudentMockInterview';
import StudentPerformance from './component/Student/StudentPerformance';
import StudentSelfLearn from './component/Student/StudentSelfLearn';
import StudentNotifications from './component/Student/StudentNotifications';
import StudentAttendance from './component/Student/StudentAttendance';
import StudentProfile from './component/Student/StudentProfile';

import FacultyRouter from './component/Faculty/FacultyRouter';
import FacultyHome from './component/Faculty/FacultyHome';
import FacultyNotes from './component/Faculty/FacultyNotes';
import FacultyProfile from './component/Faculty/FacultyProfile';
import FacultyNotifications from './component/Faculty/FacultyNotifications';


import AdminRouter from './component/Admin/AdminRouter'
import AdminHome from './component/Admin/AdminHome';
import AdminControls from './component/Admin/AdminControls';
import AdminProfile from './component/Admin/AdminProfile';
import AdminNotifications from './component/Admin/AdminNotifications';
import AdminTimetables from './component/Admin/AdminTimetables';
import AdminInstitutionInfo from './component/Admin/AdminInstitutionInfo';
import AdminFacultyAccounts from './component/Admin/AdminFacultyAccounts';
import AdminStudentAccounts from './component/Admin/AdminStudentAccounts';
import FacultyPerformance from './component/Faculty/FacultyPerformance';


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
      dispatch(authActions.setUserInfo(user));
    // navigate('/'+user.role+'/home');
    // console.log(user)
  }
},[]);

// useEffect(()=>{
// console.log(isLoggedIn);
// },[isLoggedIn]);

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

          <Route path='/faculty' element={<FacultyRouter />} exact>
            <Route path='home' element={<FacultyHome />} exact />
            <Route path="Notes" element={<FacultyNotes />} exact />
            <Route path="Mock" element={<StudentMockInterview />} exact />
            <Route path="Performance" element={<FacultyPerformance />} exact />
            <Route path="Notifications" element={<FacultyNotifications />} exact />
            <Route path="Attendance" element={<StudentAttendance />} exact />
            <Route path="StudentDetails" element={<StudentAttendance />} exact />
            <Route path="Profile" element={<FacultyProfile />} exact />
          </Route>

          <Route path='/admin' element={<AdminRouter />} exact>
            <Route path='home' element={<AdminHome />} exact />
            <Route path='StudentProfiles' element={<AdminStudentAccounts />} exact />
            <Route path='FacultyProfiles' element={<AdminFacultyAccounts />} exact />
            <Route path='Controls' element={<AdminControls />} exact />
            <Route path="Performance" element={<StudentPerformance />} exact />
            <Route path="Notifications" element={<AdminNotifications />} exact />
            <Route path="Attendance" element={<StudentAttendance />} exact />
            <Route path="Profile" element={<AdminProfile />} exact />
            <Route path="Timetables" element={<AdminTimetables/>} exact/>
            <Route path="InstitutionInfo" element={<AdminInstitutionInfo/>} exact/>
          </Route>
          </>
          }
        </Routes>
      </BrowserRouter>

    </>

  );
};

export default App;
