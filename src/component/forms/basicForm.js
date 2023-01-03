import React,{ useState } from 'react'
import './basicForm.css'; 

export const BasicForm = () => {

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
      <div className='main-container-fluid'>
        <div className='sub-main'>
          <form onSubmit={handleSubmit}>
                <div className='email'>
                    <label htmlFor='email'>Email</label>
                    <input type="text" name="email" placeholder='email' id="email" autoComplete="off" value={email} onChange={ (e)=> setEmail(e.target.value)}
                    />
                </div>

                <div className='password'>
                    <label htmlFor='password'>Password</label>
                    <input type="text" name="password" placeholder='**********' id="password" autoComplete="off" value={password} onChange={ (e)=> setPassword(e.target.value)}/>
                </div>
                <div >
                  <button type="submit" className="btn btn-info">Login</button>
                   <button className='register'>Already have account? Register</button>
                </div>
               
          </form>
          
       </div> 
      </div>
    </>
  )
}

export default BasicForm;

