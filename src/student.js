import React, { useState } from 'react';

function LoginForm() {
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
      {error && <p>{error}</p>}
      <label>
        Email ID:
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <br />
      
    </form>
    <button type="submit" className="btn btn-primary">Log in now</button>
    
    </>
  );
}

export default LoginForm;
