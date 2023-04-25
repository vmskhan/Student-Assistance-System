import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './LoginForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/authSlice';

export const LoginForm = () => {
  const isLoggedIn=useSelector(state=>state.auth.isLoggedIn);
  const  dispatch=useDispatch();
const user=JSON.parse(localStorage.getItem('userInfo'));

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate=useNavigate();

  useEffect(()=>{
    if(user && isLoggedIn)
        navigate('/'+user.role+'/home');
      },[]);
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
      localStorage.setItem('userInfo',JSON.stringify(data));
     dispatch(authActions.login()); 
    navigate('/'+data.role+'/home');

    });
  }

  return (
    <>
      <div className="loginForm">
    <Link to="/"><button className='btn'>Back</button></Link>
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
                <Link to="/Signup">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" defaultChecked />
                    <label className="form-check-label" htmlFor="gridRadios1">
                      <Link to="/Studentregister">Student Register</Link>

                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                    <label className="form-check-label" htmlFor="gridRadios2">
                      <Link to="/Facultyregister">Faculty Register</Link>

                    </label>
                  </div>
                </Link>
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

