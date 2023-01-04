import React, { useState } from 'react'



const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <section className='navbar-bg'>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a className="navbar-brand" href="#">STUDENT ASSISTANCE SYSTEM</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation" onClick={() => setShow(!show)}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${show ? "show" : " "}`}>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">

                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Feature
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="/Feature/Notes">Notes</a></li>
                    <li><a className="dropdown-item" href="#">Mock interview</a></li>
                    <li><a className="dropdown-item" href="#">Self-learning</a></li>
                    <li><a className="dropdown-item" href="#">Notification</a></li>
                    <li><a className="dropdown-item" href="#">Attendance</a></li>
                    <li><a className="dropdown-item" href="#">Performance</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
                </li>


              </ul>

              <a href='/login'><button className="btn  btn-outline-success border-1 border-primary" type="button">Log in <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
              </svg></button></a>

            </div>
          </div>
        </nav>
      </section>
    </>
  )
};
export default Navbar;
