import axios from 'axios';
import React, { useState } from 'react'
import './LoginForm.css';


export const Faculty = () => {
    const [name,setName]=useState('');
    const [id,setId]=useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [pic,setPic]=useState(
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.pngitem.com%2Fpimgs%2Fm%2F522-5220445_anonymous-profile-grey-person-sticker-glitch-empty-profile.png&imgrefurl=https%3A%2F%2Fwww.pngitem.com%2Fmiddle%2FhmhxiJi_anonymous-profile-grey-person-sticker-glitch-empty-profile%2F&tbnid=GHbdym26eAzRCM&vet=12ahUKEwjd8N3N1qf5AhWyx6ACHdkCCOQQMygCegUIARDJAQ..i&docid=DW6FqC3PlmkyYM&w=860&h=706&q=empty%20profile%20pic%20icon&ved=2ahUKEwjd8N3N1qf5AhWyx6ACHdkCCOQQMygCegUIARDJAQ"
  );
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
        let data={
            name:name,
            email:email,
            password:password,
            id:id,
            pic:pic,
            role:"faculty",
          }
          axios.post('/api/users/register',data)
          .then((res)=>res.data)
          .then((data)=>{
            console.log(data);
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
                                <div className="col-7 mx-auto mt-3">
                                    <img className="img-fluid rounded-circle" src="/assets/images/faculty.jfif"></img>
                                </div>
                            </div>
                            <br />


                            <div className=' row '>
                                <div className="input-group rounded-4">
                                    {/* <span className="input-group-text" id="basic-addon1"><img className="img-fluid userpic"></img></span>     */}
                                    <input type="text" onChange={(e)=>setName(e.target.value)} className="form-control col rounded-pill" placeholder="Full Name" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                            <div className='mb-1 row '>
                                <div className="input-group mb-1 rounded-4 mt-1">
                                    {/* <span className="input-group-text" id="basic-addon1"><img className="img-fluid userpic"></img></span>     */}
                                    <input type="text" onChange={(e)=>setId(e.target.value)} className="form-control col rounded-pill" placeholder="UID" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                            <div className='mb-1 row '>
                                <div className="input-group mb-1 rounded-4 mt-1">
                                    {/* <span className="input-group-text" id="basic-addon1"><img className="img-fluid userpic"></img></span>     */}
                                    <input type="text" onChange={(e)=>setEmail(e.target.value)} className="form-control col rounded-pill" placeholder="Username@mjcollege.ac.in" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                            </div>

                            <div className='mb-1 row'>
                                <div className="input-group mb-1 rounded-4 mt-1">
                                    {/* <span className="input-group-text" id="basic-addon1"><img className="img-fluid userpic" src="/assets/images/user icon.jfif"></img></span>     */}
                                    <input type="password" onChange={(e)=>setPassword(e.target.value)} className="form-control col rounded-pill" placeholder="Password" aria-label="password" aria-describedby="basic-addon1" />
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

export default Faculty;
