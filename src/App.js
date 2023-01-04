import React, { useState } from 'react';
import BasicForm from './component/forms/basicForm';
import Register, { Student } from './component/forms/Stdregister';
import Faculty from './component/forms/Facultyreg';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from './navbar';
import Notes from './component/Dropdown/Features/Notes';

import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './component/Home';
import { Feature } from './component/Dropdown/Feature';
import Footer from './component/Footer';
import Mock from './component/Dropdown/Features/Mock';
import Performance from './component/Dropdown/Features/Performance';
import Selflearn from './component/Dropdown/Features/Selflearn';
import Notify from './component/Dropdown/Features/Notify';
import Attendance from './component/Dropdown/Features/Attendance';
const App = () => {


  return (
    <>

      <Navbar />

      <BrowserRouter>

        <Routes>
          <Route path='/login' element={<BasicForm />} exact />

          <Route path='/Stdregister' element={<Student />} exact />
          <Route path='/Facultyreg' element={<Faculty />} exact />
          <Route path='/' element={<Home />} exact />
          <Route path='/basicForm' element={<BasicForm />} exact />
          <Route path='/Feature' element={< Feature />} exact >
            <Route path="Notes" element={<Notes/>} exact/>
            <Route path="Mock" element={<Mock/>} exact/>
            <Route path="Performance" element={<Performance/>} exact/>
            <Route path="Selflearn" element={<Selflearn/>} exact/>
            <Route path="Notify" element={<Notify/>} exact/>
            <Route path="Attendance" element={<Attendance/>} exact/>
          </Route>
        </Routes>
      </BrowserRouter>

    </>

  );
};

export default App;
