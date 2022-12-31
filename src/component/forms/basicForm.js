import React,{ useState } from 'react'

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
       <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='email'>Email</label>
                <input type="text" name="email" id="email" autoComplete="off" value={email} onChange={ (e)=> setEmail(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor='password'>Password</label>
                <input type="text" name="password" id="password" autoComplete="off" value={password} onChange={ (e)=> setPassword(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary">Log in now</button>
       </form> 
    </>
  )
}

export default BasicForm;

