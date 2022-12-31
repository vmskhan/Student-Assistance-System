import React, {useState} from 'react'

const Navbar = () => {
    const [show,setShow]=useState(false);
  return (
    <>
    <section className='navbar-bg'>
    <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container">
    <a className="navbar-brand" href="#">STUDENT ASSISTANCE SYSTEM</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation" onClick={ ()=>setShow(!show)}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${show ? "show" : " "}`}>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Feature
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Notes</a></li>
            <li><a className="dropdown-item" href="#">Mock interview</a></li>
            <li><a className="dropdown-item" href="#">Self-learning</a></li>
            <li><hr className="dropdown-divider"/></li>
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
      
        <button className="btn  btn-style" type="submit">Sign up</button>
      
      
        <a href='/login'><button className="btn  btn-style" type="button">Log in</button></a>
      
    </div>
  </div>
</nav>
</section>
    </>
  )
};
export default Navbar;
