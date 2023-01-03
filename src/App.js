import React, { useState} from 'react';
import Navbar from './navbar';
import BasicForm from './component/forms/basicForm';
import './component/forms/basicForm.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap"
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
const App = () => {
 

  return (
    <>
   <Navbar /> 
   <BrowserRouter>
   
    <Routes>
       <Route path='/login' element={<BasicForm />} exact/>
       </Routes>
    </BrowserRouter>
   
    </>
  
  );
};

export default App;
