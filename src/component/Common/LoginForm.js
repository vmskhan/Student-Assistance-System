import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

export const LoginForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navig=useNavigate();
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("reached");
    if (!validateForm()) {
      setError('Email and password are required');
      console.log('error');
      return;
    }
    let data={
      email:email,
      password:password,
    }
    axios.post('/api/users/login',data)
    .then((res)=>res.data)
    .then((data)=>{
      console.log(data);
      if(data.role==='admin')
        navig('/admin/home');
      else if(data.role==='faculty')
        navig('/faculty/home');
      else if(data.role==='student')
        navig('/student/home');

    });
  }

  return (
    <>
      <div className="loginForm">
    <a href="/"><button className='btn'>Back</button></a>
        <div className='main-container-fluid'>


          <div className='sub-main'>

            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-7 mx-auto mt-5">
                  <img className="img-fluid rounded-circle" src="/assets/images/logo3.png"></img>
                </div>
              </div>
              <br />
              <br />
              
              <div className='mb-1 row '>
                <div className="input-group mb-3 rounded-4 mt-1">
                  {/* <span className="input-group-text" id="basic-addon1"><img className="img-fluid userpic"></img></span>     */}
                  <input type="text" onChange={(e)=>setEmail(e.target.value)} className="form-control col rounded-pill" placeholder="Username@mjcollege.ac.in" aria-label="Username" aria-describedby="basic-addon1" />
                </div>


              </div>

              <div className='mb-1 row'>
                <div className="input-group mb-3 rounded-4 mt-1">
                  {/* <span className="input-group-text" id="basic-addon1"><img className="img-fluid userpic" src="/assets/images/user icon.jfif"></img></span>     */}
                  <input type="password" onChange={(e)=>setPassword(e.target.value)} className="form-control col rounded-pill" placeholder="Password" aria-label="password" aria-describedby="basic-addon1" />
                </div>

              </div>
              <div >
                <button type="submit" className="btn btn-info py-2">Login</button>
                <br />Don't have account? Register
                <a href="/Signup">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" defaultChecked />
                    <label className="form-check-label" htmlFor="gridRadios1">
                      <a href="/Studentregister">
                        Student Register
                      </a>

                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                    <label className="form-check-label" htmlFor="gridRadios2">
                      <a href="/Facultyregister">Faculty Register</a>

                    </label>
                  </div>
                </a>
                <br />


              </div>

            </form>

          </div>

        </div>
        {error && <span>{error}</span>}
      </div>
    </>
  )
}

export default LoginForm;

