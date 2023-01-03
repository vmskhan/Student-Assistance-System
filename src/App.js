import React, { useState} from 'react';
import BasicForm from './component/forms/basicForm';
import Register, { Student } from './component/forms/Stdregister';
import Faculty from './component/forms/Facultyreg';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";

import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './component/Home';
const App = () => {
 

  return (
    <>
  

   <BrowserRouter>
   
    <Routes>
       <Route path='/login' element={<BasicForm />} exact/>
       <Route path='/login' element={<Faculty />} exact/>
       <Route path='/Signup' element={<Student />} exact/>
       <Route path='/' element={<Home/>} exact/>
       </Routes>
    </BrowserRouter>
   
    </>
  
  );
};

export default App;
