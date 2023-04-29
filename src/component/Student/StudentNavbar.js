import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {authActions} from "./../../store/authSlice";
const StudentNavbar=()=>{
  const baseUrl=process.env.REACT_APP_IMAGE_UPLOADS_BASE_URL;
  const isLoggedIn=useSelector(state=>state.auth.isLoggedIn);  
    const dispatch=useDispatch();
    const navigate=useNavigate();
const userInfo=JSON.parse(localStorage.getItem('userInfo'));
    const logoutHandler=()=>{
      localStorage.removeItem('userInfo');
      dispatch(authActions.logout());
      navigate('/');
    }
    return (
      <>
        <section className='navbar-bg'>
          <nav className="navbar navbar-expand-lg navbar-light bg-primary">
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
                {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0"> */}
                  {/* <li className="nav-item">
  
                    <NavLink activeClassName="is-active" className="active fw-bold btn btn-light btn-outline-info" aria-current="page" to="/student/home">Home</NavLink>
                  </li> */}
                  {/* <li className="nav-item dropdown"> */}
                    {/* <Link className="btn btn-light btn-outline-info dropdown-toggle fw-bold" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Feature
                    </Link> */}
                    {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown"> */}
                    
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" aria-labelledby="navbarDropdown">
                      <li><NavLink activeClassName="is-active" className="btn btn-outline-light border-0 fw-bold fst-italic" to="/student/Notes">Notes</NavLink></li>
                      <li><NavLink activeClassName="is-active" className="btn btn-outline-light border-0 fw-bold fst-italic" to="/student/Mock">Mock interview</NavLink></li>
                      <li><NavLink activeClassName="is-active" className="btn btn-outline-light border-0 fw-bold fst-italic" to="/student/Selflearn">Self-learning</NavLink></li>
                      <li><NavLink activeClassName="is-active" className="btn btn-outline-light border-0 fw-bold fst-italic" to="/student/Notifications">Notification</NavLink></li>
                      <li><NavLink activeClassName="is-active" className="btn btn-outline-light border-0 fw-bold fst-italic" to="/student/Attendance">Attendance</NavLink></li>
                      <li><NavLink activeClassName="is-active" className="btn btn-outline-light border-0 fw-bold fst-italic" to="/student/Performance">Performance</NavLink></li>
                      {/* <li><hr className="dropdown-divider" /></li> */}
  
                    </ul>
                  {/* </li> */}
  
                  {/* <li className="nav-item">
                    <NavLink activeClassName="is-active" className="btn btn-light btn-outline-info fw-bold" to="#">About</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="is-active" className="btn btn-light btn-outline-info fw-bold" to="#">Contact</NavLink>
                  </li> */}
  
  
                {/* </ul> */}
                <div className="d-flex align-items-center" >
                  
                  <div className="dropdown">
                        <button className="btn btn-outline-primary border-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                         {userInfo.pic==='Nil'?( 
                         <img
                          src="/assets/images/logo1.png"
                          className="rounded-circle"
                          height="65vh"
                          alt="Black and White Portrait of a Man"
                          loading="lazy"
                        />
                         ):(
                        <img src={baseUrl+userInfo.pic} height="65vh" className="rounded-circle" alt="User Profile pic"/>
                         )
                         }
                         </button>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="navbarDropdownMenuAvatar"
                    >
                      <li>
                        <NavLink activeClassName="is-active" className="dropdown-item fw-bold" to="/Student/Profile">My profile</NavLink>
                      </li>
                      {/* <li>
                        <NavLink activeClassName="is-active" className="dropdown-item fw-bold" to="#">Settings</NavLink>
                      </li> */}
                      <li>
                        <button className="dropdown-item fw-bold fs-5" onClick={()=>logoutHandler()}>Logout</button>
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