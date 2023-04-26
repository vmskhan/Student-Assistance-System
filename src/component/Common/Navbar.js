
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <section className='navbar-bg'>
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              <i className="fas fa-bars"></i>

            </button>


            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <Link className="navbar-brand mt-1 mt-lg-0" to="/">
                <img
                  src="/assets/images/SAS2.png"
                  height="70"
                  alt="MDB Logo"
                  loading="lazy"
                />
              </Link>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">

                  <NavLink activeClassName="is-active" className="btn btn-outline-primary fw-bold" aria-current="page" to="/" exact><b>Home</b></NavLink>
                </li>

                <li className="nav-item">
                  <NavLink activeClassName="is-active" className="btn btn-outline-primary border-0 fw-normal text-decoration-italic" to="/StudentRegister"><b>Student signup</b></NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="is-active" className="btn btn-light btn-outline-primary fw-bold" to="/FacultyRegister"><b>Faculty signup</b></NavLink>
                </li>
              </ul>
              <div className="d-flex align-items-center" >
                <NavLink activeClassName="is-active" to='/login'><button className="btn btn-light btn-outline-primary fw-bold" type="button"><b>Log in </b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                  <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                </svg></button></NavLink>
                      
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  )
};
export default Navbar;


