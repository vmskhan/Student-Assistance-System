import React, { useState} from 'react';
import Navbar from './navbar';
import BasicForm from './component/forms/basicForm';
import Register from './component/forms/Register';
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
       <Route path='/Signup' element={<Register />} exact/>
       <Route path='/home' element={<Home/>} exact/>
       </Routes>
    </BrowserRouter>
   
    </>
  
  );
};

export default App;
