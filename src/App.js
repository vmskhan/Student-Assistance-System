import React, { useState } from 'react';
import BasicForm from './component/forms/basicForm';
import Register, { Student } from './component/forms/Stdregister';
import Faculty from './component/forms/Facultyreg';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from './navbar';
import Footer from './component/Footer';

import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './component/Home';
const App = () => {


  return (
    <>

      <Navbar />
      <Footer />
      <BrowserRouter>

        <Routes>
          <Route path='/login' element={<BasicForm />} exact />
          {/* <Route path='/login' element={<Faculty />} exact/> */}
          <Route path='/Stdregister' element={<Student />} exact />
          <Route path='/Facultyreg' element={<Faculty />} exact />
          <Route path='/' element={<Home />} exact />
          <Route path='/basicForm' element={<BasicForm />} exact />
        </Routes>
      </BrowserRouter>

    </>

  );
};

export default App;
