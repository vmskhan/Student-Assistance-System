
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

                  <NavLink activeClassName="is-active" className="btn btn-outline-light border-0 fw-bold fst-italic" aria-current="page" to="/" exact>Home</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink activeClassName="is-active" className="btn btn-outline-light border-0 fw-bold fst-italic" to="/StudentRegister">Student signup</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="is-active" className="btn btn-outline-light border-0 fw-bold fst-italic" to="/FacultyRegister">Faculty signup</NavLink>
                </li>
              </ul>
              <div className="d-flex align-items-center" >
                <NavLink activeClassName="is-active" className="btn btn-outline-light border-0 fw-bold fs-5 fst-italic" to='/login'>Log in <i className="bi bi-box-arrow-in-right"></i></NavLink>
                      
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  )
};
export default Navbar;


