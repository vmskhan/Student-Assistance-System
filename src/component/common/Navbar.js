import React, { useState } from 'react'



const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <section className='navbar-bg'>
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
          <div className="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation" onClick={() => setShow(!show)}>
              <span class="navbar-toggler-icon"></span>
              <i className="fas fa-bars"></i>

            </button>


            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <a className="navbar-brand mt-1 mt-lg-0" href="/">
                <img
                  src="/assets/images/SAS2.png"
                  height="70"
                  alt="MDB Logo"
                  loading="lazy"
                />
              </a>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">

                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                {/* <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Register
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="/StudentRegister">Student</a></li>
                    <li><a className="dropdown-item" href="/FacultyRegister">Faculty</a></li>
                    <li><hr className="dropdown-divider" /></li>

                  </ul>
                </li> */}

                <li className="nav-item">
                  <a className="nav-link" href="/StudentRegister">Student signup</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/FacultyRegister">Faculty signup</a>
                </li>


              </ul>
              <div className="d-flex align-items-center" >
                <a href='/login'><button className="btn  btn-outline-success border-1 border-primary" type="button">Log in <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                  <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                </svg></button></a>
                {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
                  <div class="container-fluid">
                    <ul class="navbar-nav">

                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle hidden-arrow"
                          href="#"
                          id="navbarDropdownMenuLink"
                          role="button"
                          data-mdb-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fas fa-bell"></i>

                        </a>
                        <ul
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="navbarDropdownMenuLink"
                        >

                          <li>
                            <a className="dropdown-item" href="#">Something else here</a>
                          </li>
                        </ul>
                      </li>

                    </ul>
                  </div>
                </nav> */}
                {/* <div className="dropdown">
                  <a
                    className="dropdown-toggle d-flex align-items-center hidden-arrow"
                    href="#"
                    id="navbarDropdownMenuAvatar"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="/assets/images/logo1.png"
                      className="rounded-circle"
                      height="25"
                      alt="Black and White Portrait of a Man"
                      loading="lazy"
                    />
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuAvatar"
                  >
                    <li>
                      <a className="dropdown-item" href="#">My profile</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Settings</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Logout</a>
                    </li>
                  </ul>
                </div> */}

              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  )
};
export default Navbar;
