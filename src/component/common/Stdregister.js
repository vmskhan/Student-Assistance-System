import React, { useState } from 'react'
import './LoginForm.css';

export const Student = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!validateForm()) {
      setError('Email and password are required');
      return;
    }
    // Add code to submit the form here
  }

  return (
    <>
      <div className="loginForm">
      <a href="/"><button className='btn'>Back</button></a>
        <div className='main-container-fluid'>
        
          <div className='sub-main'>
          
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-7 mx-auto mt-3">
                  <img className="img-fluid rounded-circle" src="/assets/images/register.jfif"></img>
                </div>
              </div>
              <br />


              <div className=' row '>
                <div className="input-group rounded-4">
                  {/* <span className="input-group-text" id="basic-addon1"><img className="img-fluid userpic"></img></span>     */}
                  <input type="text" class="form-control col rounded-pill" placeholder="Full Name" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
              </div>
              <div className='mb-1 row '>
                <div className="input-group mb-1 rounded-4 mt-1">
                  {/* <span className="input-group-text" id="basic-addon1"><img className="img-fluid userpic"></img></span>     */}
                  <input type="text" class="form-control col rounded-pill" placeholder="1604-XX-XXX-XXX" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
              </div>
              <div className='mb-1 row '>
                <div className="input-group mb-1 rounded-4 mt-1">
                  {/* <span className="input-group-text" id="basic-addon1"><img className="img-fluid userpic"></img></span>     */}
                  <input type="text" class="form-control col rounded-pill" placeholder="Username@mjcollege.ac.in" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
              </div>

              <div className='mb-1 row'>
                <div className="input-group mb-1 rounded-4 mt-1">
                  {/* <span className="input-group-text" id="basic-addon1"><img className="img-fluid userpic" src="/assets/images/user icon.jfif"></img></span>     */}
                  <input type="password" class="form-control col rounded-pill" placeholder="Password" aria-label="password" aria-describedby="basic-addon1" />
                </div>

              </div>
              <div >
                <button type="submit" className="btn btn-info py-2">Register</button>
                <br />Already have account?<a href="/login"> Login</a>
              </div>

            </form>

          </div>
        </div>
      </div>
    </>
  )
}

export default Student;

