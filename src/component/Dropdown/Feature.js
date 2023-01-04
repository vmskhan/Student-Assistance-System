import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Notes from './Features/Notes';
export const Feature = () => {
    return (
        <div>
            {/* <BrowserRouter>
            <Routes>
            
            <Route path='Notes' element={<Notes />} exact/>
            </Routes>
            </BrowserRouter> */}
    <Outlet/>
        </div>
    )
}
export default Feature;