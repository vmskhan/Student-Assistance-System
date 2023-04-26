import React from 'react'
import './Attendance.css'
import { Link } from 'react-router-dom';

export const Attendance = () => {
  return (
    <div className='Attendance'>
      <div>

        <section className="vh-100 gradient-custom">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
                  <div className="card-body p-5 text-center">

                    <div className="mb-md-5 mt-md-4 pb-5">

                      <h2 className="fw-bold mb-2 text-uppercase">ATTENDANCE</h2>
                      <p className="text-white-50 mb-5">Please enter your login and password!</p>

                      <div className="form-outline form-white mb-4">
                        <label className="form-label" htmlFor="typeEmailX">Email</label>
                        <input type="email" id="typeEmailX" className="form-control form-control-lg" />

                      </div>

                      <div className="form-outline form-white mb-4">
                        <label className="form-label" htmlFor="typePasswordX">Password</label>
                        <input type="password" id="typePasswordX" className="form-control form-control-lg" />

                      </div>

                      {/* <p className="small mb-5 pb-lg-2"><Link className="text-white-50" to="#!">Forgot password?</Link></p> */}

                      <button className="btn btn-outline-light btn-lg px-5" type="submit">Check</button>


                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
export default Attendance;