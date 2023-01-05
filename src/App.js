import React, { useState } from 'react';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";

import Notes from './component/Dropdown/Features/Notes';

import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

import { Feature } from './component/Dropdown/Feature';

import Mock from './component/Dropdown/Features/Mock';
import Performance from './component/Dropdown/Features/Performance';
import Selflearn from './component/Dropdown/Features/Selflearn';
import Notify from './component/Dropdown/Features/Notify';
import Attendance from './component/Dropdown/Features/Attendance';
import StudentRouter from './component/Student/StudentRouter';
import StudentNotes from './component/Student/StudentNotes';
import StudentPerformance from './component/Student/StudentPerformance';
import StudentNotifications from './component/Student/StudentNotifications';
import StudentAttendance from './component/Student/StudentAttendance';
import StudentMockInterview from './component/Student/StudentMockInterview';
import StudentSelfLearn from './component/Student/StudentSelfLearn';
import AdminHome from './component/Admin/AdminHome';
import AdminRouter from './component/Admin/AdminRouter';
import AdminStudentProfiles from './component/Admin/AdminStudentProfiles';
import AdminFacultyProfiles from './component/Admin/AdminFacultyProfiles';
import AdminControls from './component/Admin/AdminControls';
import FacultyRouter from './component/Faculty/FacultyRouter';
import FacultyNotes from './component/Faculty/FacultyNotes';
import FacultyHome from './component/Faculty/FacultyHome';
import StudentHome from './component/Student/StudentHome';
import Home from './component/common/Home';
import LoginForm from './component/common/LoginForm';
import Student from './component/common/Stdregister';
import Faculty from './component/common/Facultyreg';

const App = () => {


  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/login' element={<LoginForm/>} exact />

          <Route path='/StudentRegister' element={<Student/>} exact />
          <Route path='/FacultyRegister' element={<Faculty />} exact />
          <Route path='/' element={<Home/>} exact />
          {/* <Route path='/basicForm' element={<LoginForm />} exact />
          <Route path='/Feature' element={< Feature />} exact >
            <Route path="Notes" element={<Notes/>} exact/>
            <Route path="Mock" element={<Mock/>} exact/>
            <Route path="Performance" element={<Performance/>} exact/>
            <Route path="Selflearn" element={<Selflearn/>} exact/>
            <Route path="Notify" element={<Notify/>} exact/>
            <Route path="Attendance" element={<Attendance/>} exact/>
          </Route> */}

          <Route path='/student' element={<StudentRouter/>} exact>
            <Route path='home' element={<StudentHome/>} exact/>
            <Route path="Notes" element={<StudentNotes/>} exact/>
            <Route path="Mock" element={<StudentMockInterview/>} exact/>
            <Route path="Performance" element={<StudentPerformance/>} exact/>
            <Route path="Selflearn" element={<StudentSelfLearn/>} exact/>
            <Route path="Notifications" element={<StudentNotifications/>} exact/>
            <Route path="Attendance" element={<StudentAttendance/>} exact/>
          </Route>
          <Route path='/faculty' element={<FacultyRouter/>} exact>
            <Route path='home' element={<FacultyHome/>} exact/>
            <Route path="Notes" element={<FacultyNotes/>} exact/>
            <Route path="Mock" element={<StudentMockInterview/>} exact/>
            <Route path="ClassPerformance" element={<StudentPerformance/>} exact/>
            <Route path="Selflearn" element={<StudentSelfLearn/>} exact/>
            <Route path="Notifications" element={<StudentNotifications/>} exact/>
            <Route path="Attendance" element={<StudentAttendance/>} exact/>
            <Route path="StudentDetails" element={<StudentAttendance/>} exact/>
          </Route>
          <Route path='/admin' element={<AdminRouter/>} exact>
            <Route path='home' element={<AdminHome/>} exact/>
            <Route path='StudentProfiles' element={<AdminStudentProfiles/>} exact/>
            <Route path='FacultyProfiles' element={<AdminFacultyProfiles/>} exact/>
            <Route path='Controls' element={<AdminControls/>} exact/>
            <Route path="Performance" element={<StudentPerformance/>} exact/>
            <Route path="Notifications" element={<StudentNotifications/>} exact/>
            <Route path="Attendance" element={<StudentAttendance/>} exact/>
          </Route>
        </Routes>
      </BrowserRouter>

    </>

  );
};

export default App;
