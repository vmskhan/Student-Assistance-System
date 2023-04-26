import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { authActions } from "../../store/authSlice";
const AdminNavbar=()=>{

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
          <nav className="navbar navbar-expand-lg navbar-light bg-danger">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                <i className="fas fa-bars"></i>
  
              </button>
  
  
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <Link className="navbar-brand mt-1 mt-lg-0" to="/admin/home">
                  <img
                    src="/assets/images/SAS2.png"
                    height="70"
                    alt="MDB Logo"
                    loading="lazy"
                  />
                </Link>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
  
                    <NavLink activeClassName="is-active" className="btn btn-light btn-outline-success fw-bold" aria-current="page" to="/admin/home">Home</NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="btn btn-light btn-outline-success fw-bold dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Features
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><NavLink activeClassName="is-active" className="dropdown-item fw-bold" to="/admin/StudentProfiles">Student Profiles</NavLink></li>
                      <li><NavLink activeClassName="is-active" className="dropdown-item fw-bold" to="/admin/FacultyProfiles">Faculty Profiles</NavLink></li>
                      <li><NavLink activeClassName="is-active" className="dropdown-item fw-bold" to="/admin/Attendance">Attendance</NavLink></li>
                      <li><NavLink activeClassName="is-active" className="dropdown-item fw-bold" to="/admin/Performance">Performance</NavLink></li>
                      <li><hr className="dropdown-divider" /></li>
  
                    </ul>
                  </li>
  
                  <li className="nav-item">
                    <NavLink activeClassName="is-active" className="btn btn-light btn-outline-success fw-bold" to="/admin/Controls">Controls</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="is-active" className="btn btn-light btn-outline-success fw-bold" to="/admin/Notifications">Notifications</NavLink>
                  </li>
  
  
                </ul>
                <div className="d-flex align-items-center" >
                  
                  <div className="dropdown">
                  <button className="btn btn-light btn-outline-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                        <NavLink activeClassName="is-active" className="dropdown-item fw-bold" to="#">My profile</NavLink>
                      </li>
                      <li>
                        <NavLink activeClassName="is-active" className="dropdown-item fw-bold" to="#">Settings</NavLink>
                      </li>
                      <li>
                        <button className="dropdown-item fw-bold" onClick={()=>logoutHandler()}>Logout</button>
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
export default AdminNavbar;