import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { authActions } from "../../store/authSlice";
const AdminNavbar=()=>{
    const baseUrl=process.env.REACT_APP_IMAGE_UPLOADS_BASE_URL;
    const isLoggedIn=useSelector(state=>state.auth.isLoggedIn);  
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const userInfo=useSelector(state=>state.auth.userInfo);
    
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
                <Link className="navbar-brand mt-1 mt-lg-0 text-center" to="/admin/home">
                  <div><img
                    src="/assets/images/SAS2.png"
                    height="70"
                    alt="MDB Logo"
                    loading="lazy"
                  /></div>
                  <div><span className="text-light fw-bolder fst-italic">ADMIN</span></div>
                </Link>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li><NavLink activeClassName="is-active" className="btn btn-outline-light border-0 fw-bold fst-italic" to="/admin/StudentProfiles">Student Profiles</NavLink></li>
                  <li><NavLink activeClassName="is-active" className="btn btn-outline-light border-0 fw-bold fst-italic" to="/admin/FacultyProfiles">Faculty Profiles</NavLink></li>
                  {/* <li><NavLink activeClassName="is-active" className="btn btn-outline-light border-0 fw-bold fst-italic" to="/admin/Attendance">Attendance</NavLink></li> */}
                  {/* <li><NavLink activeClassName="is-active" className="btn btn-outline-light border-0 fw-bold fst-italic" to="/admin/Performance">Performance</NavLink></li> */}
                  <li><NavLink activeClassName="is-active" className="btn btn-outline-light border-0 fw-bold fst-italic" to="/admin/InstitutionInfo">Institution Info</NavLink></li>
                  <li><NavLink activeClassName="is-active" className="btn btn-outline-light border-0 fw-bold fst-italic" to="/admin/Controls">Controls</NavLink></li>
                  <li><NavLink activeClassName="is-active" className="btn btn-outline-light border-0 fw-bold fst-italic" to="/admin/Notifications">Notifications</NavLink></li>
                  <li><NavLink activeClassName="is-active" className="btn btn-outline-light border-0 fw-bold fst-italic" to="/admin/Timetables">Time Tables</NavLink></li>
                </ul>
                <div className="d-flex align-items-center" >
                  
                  <div className="dropdown">
                  <button className="btn rounded-circle dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                     {userInfo.pic==='Nil'?( <img
                        src="/assets/images/logo1.png"
                        className="rounded-circle"
                        height="65vh"
                        alt="Black and White Portrait of a Man"
                        loading="lazy"
                      />):(
                        <img src={baseUrl+userInfo.pic} height="65vh" className="rounded-circle" alt="Profile pic"/>
                      )}
                    </button>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="navbarDropdownMenuAvatar"
                    >
                      <li>
                        <NavLink activeClassName="is-active" className="dropdown-item fw-bold" to="/admin/Profile">My profile</NavLink>
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
export default AdminNavbar;