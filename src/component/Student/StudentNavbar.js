import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {authActions} from "./../../store/authSlice";
const StudentNavbar=()=>{
  const isLoggedIn=useSelector(state=>state.auth.isLoggedIn);  
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const logoutHandler=()=>{
      localStorage.removeItem('userInfo');
      dispatch(authActions.logout());
      navigate('/');
    }
    return (
      <>
        <section className='navbar-bg'>
          <nav className="navbar navbar-expand-lg navbar-light bg-info fw-bolder">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                <i className="fas fa-bars"></i>
  
              </button>
  
  
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <Link className="navbar-brand mt-1 mt-lg-0" to="/student/home">
                  <img
                    src="/assets/images/SAS2.png"
                    height="70"
                    alt="MDB Logo"
                    loading="lazy"
                  />
                </Link>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
  
                    <Link className="nav-link active fw-bold" aria-current="page" to="/student/home">Home</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Feature
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><Link className="dropdown-item" to="/student/Notes">Notes</Link></li>
                      <li><Link className="dropdown-item" to="/student/Mock">Mock interview</Link></li>
                      <li><Link className="dropdown-item" to="/student/Selflearn">Self-learning</Link></li>
                      <li><Link className="dropdown-item" to="/student/Notifications">Notification</Link></li>
                      <li><Link className="dropdown-item" to="/student/Attendance">Attendance</Link></li>
                      <li><Link className="dropdown-item" to="/student/Performance">Performance</Link></li>
                      <li><hr className="dropdown-divider" /></li>
  
                    </ul>
                  </li>
  
                  <li className="nav-item">
                    <Link className="nav-link" to="#">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#">Contact</Link>
                  </li>
  
  
                </ul>
                <div className="d-flex align-items-center" >
                  
                  <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <img
                          src="/assets/images/logo1.png"
                          className="rounded-circle"
                          height="25"
                          alt="Black and White Portrait of a Man"
                          loading="lazy"
                        />
                        </button>
                      
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="navbarDropdownMenuAvatar"
                    >
                      <li>
                        <Link className="dropdown-item" to="#">My profile</Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">Settings</Link>
                      </li>
                      <li>
                        <button className="dropdown-item " onClick={()=>logoutHandler()}>Logout</button>
                      </li>
                    </ul>
                  </div>
  
                </div>
              </div>
            </div>
          </nav>
        </section>
      </>
    );
}
export default StudentNavbar;