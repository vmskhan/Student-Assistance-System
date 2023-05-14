import { useState } from 'react';
import ErrorMessage from './ErrorMessage';
import Loading from './Loading';
// import './register.css';
import proxyAxios from '../../axiosMiddleware';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const StudentRegister=() => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [pic,setPic]=useState(
        {
            data:'',
            preview:''
        });
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const [message,setMessage] = useState("");
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(false);
    const [rollNo,setRollNo]=useState("");

    const submitHandler = async(e) =>{
        e.preventDefault();

        if(confirmPassword !== password)
        {
            setMessage("Passwords do not match");
        }
        else{
            setMessage("");
            //     const config={
            //     headers:{
            //         "Content-type": "application/json",
            //     },  
            // };
            console.log(JSON.stringify({name,email,password,pic}));
            setLoading(true);
            let data={
                name:name,
                email:email,
                password:password,
                userId:rollNo,
                pic:"Nil",
                role:"student",
              }
              let formData=new FormData();
              formData.append('data',JSON.stringify(data));
              formData.append('profilePic',pic.data);
              console.log(pic)
            proxyAxios.post("/api/users/register",formData)
            .then((res)=>res.data)
            .then((data)=>{
                console.log(data);
                localStorage.setItem("userInfo",JSON.stringify(data));
                setLoading(false);
        })
        .catch((error)=>{
            setLoading(false);
            // setError(error.response.data.message);
            setError(error);
        });
    }
};

 const imageHandler=(e)=>{
    let data={
        preview:URL.createObjectURL(e.target.files[0]),
        data:e.target.files[0],
    }
    setPic(data);
 }

    return(
        <>
        <Navbar/>
    <div className="auth-bg-left-img d-flex flex-column">
        <div className="d-flex align-items-center justify-content-around">
            <div className="shadow rounded bg-white px-5 py-3 w-50 my-3">      
                <div className="h3 mt-4 text-success text-center"> <img
                  src="/assets/images/SAS2.png"
                  height="70"
                  alt="MDB Logo"
                  loading="lazy"
                /> SAS</div>
                <div className="text-center"> 
                    <small className="text-secondary">A better way to Assess </small>             
                </div>
                {message && <ErrorMessage message={message}/>}
                {error && <ErrorMessage message= {error} />}
                <div className="h5 mt-4 text-success text-center">Student Sign-Up </div>              
                <form className="mt-3" onSubmit={(e) => submitHandler(e)}>
                    <div className="form-group">
                        <label htmlFor="email" className="mb-2 text-secondary">Email id</label>
                        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="form-control" required/>
                    </div>
                    <div className="form-group mt-4">
                        <label htmlFor="name" className="mb-2 text-secondary">Name</label>
                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" className="form-control" required/>
                    </div>
                    <div className="form-group mt-4">
                        <label htmlFor="rollno" className="mb-2 text-secondary">Roll No</label>
                        <input type="text" name="rollno" value={rollNo} onChange={(e) => setRollNo(e.target.value)} placeholder="Your Roll No" className="form-control" required/>
                    </div>
                    <div className="form-group mt-4">
                        <label htmlFor="password" className="mb-2 text-secondary">Password</label>
                        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="form-control" required/>
                    </div>
                    <div className="form-group mt-4">
                        <label htmlFor="Cpassword" className="mb-2 text-secondary">Confirm Password</label>
                        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="re-enter Password" className="form-control" required/>
                    </div>
                    <div className="form-group mt-4">
                        <label htmlFor="DP" className="mb-2 text-secondary">Upload profile picture</label>
                        <input type="file" onChange={(e) => imageHandler(e)}  className="form-control" />
                       {pic.preview && 
                        <img src={pic.preview} className="img-fluid"/>
                       } 
                    </div>
                    <div className="text-center mt-4">
                        <input className="btn bg-success text-white btn-sm px-5" type="submit" />
                    </div>
                    <div className="my-2 text-center text-danger">
                        {/* user already exists */}
                    </div>
                    <div className="mt-3 text-center">
                        <div className="text-secondary mb-2"> OR</div>
                        Already have an account ? <Link to="/login" >Login</Link><br/>
                    </div>
                    {loading && <Loading/>}
                </form>
            </div>
        </div>
    
    </div>
    <Footer/>
    </>
    )
}
export default StudentRegister;