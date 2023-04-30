import proxyAxios from "../../axiosMiddleware";
import {useEffect, useState} from "react";
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";
import { useLocation, useNavigate } from "react-router";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/authSlice";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";



const Login=() => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState("");
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const isLoggedIn=useSelector(state=>state.auth.isLoggedIn);

    useEffect(() => {
        let userInfo=JSON.parse(localStorage.getItem("userInfo"));
        if(userInfo)
            dispatch(authActions.login());
        if(isLoggedIn){
            if(userInfo)
            {
                navigate("/"+userInfo.role+'/home');
            }
        }
        else
            navigate("/login");
            
        console.log("isLoggedIn:"+isLoggedIn);
        },[isLoggedIn]);

    const submitHandler = async (e) => {
            e.preventDefault();
            console.log(email,password);

            const config={
                headers:{
                    "Content-type": "application/json",
                },  
            };
            setLoading(true);
            let data={
                email:email,
                password:password,
              }
            proxyAxios.post("/api/users/login",data,config)
            .then((res)=>res.data)
            .then((data)=>{
                console.log(data);
                localStorage.setItem("userInfo",JSON.stringify(data));
                dispatch(authActions.login());

                setLoading(false);
                setError("");
                navigate('/'+data.role+'/home');
            })
            .catch ((error)=> {
                setLoading(false);
                setError(error.response.data.message);
        });
    };

    return(
        <>
        <Navbar/>
        <div className="container-fluid">
            
<div className="row vh-100">
        <div className="col-6 auth-bg-left-img">
            <div className="container-fluid">
            <div className="row justify-content-center vh-100">
            <div className="col-9 align-self-center shadow rounded bg-white border border-success border-2 px-5 py-3">
                
                <div className="h3 mt-4 text-success text-center"><img
                  src="/assets/images/SAS2.png"
                  height="70"
                  alt="MDB Logo"
                  loading="lazy"
                /> SAS</div>
                <div className="text-center"> 
                    <small className="text-secondary">A tool for bright future of Students</small>             
                </div>
                
                <div className="h5 mt-4 text-d text-center">L o g i n</div>     
                {error && <ErrorMessage message={error} />}
                <form className="mt-3" name="login" onSubmit={(e)=>submitHandler(e)}>
                    <div className="form-group">
                        <label htmlFor="email" className="mb-2 text-secondary">Email id</label>
                        <input type="email"  name="username" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="form-control" />
                    </div>
                    <div className="form-group mt-4">
                        <label htmlFor="password" className="mb-2 text-secondary">Password</label>
                        <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" />
                    </div>
                    {/* <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" /> */}
                    <div className="text-center mt-4">
                        <input className="btn bg-success text-white btn-sm px-5" type="submit" />
                    </div>
                    <div className="my-2 text-center text-danger">
                        {/* invalid credentials */}
                    </div>
                    <div className="mt-3 text-center">
                        <div className="text-secondary mb-2"> OR</div>
                        Don't have an account ? <Link to="/StudentRegister" >Sign Up (for students)</Link><br/>
                        <Link to="/FacultyRegister" >Sign Up (for faculty)</Link><br/>
                    </div>
            {/* spinner */}
                    {loading && <Loading/>}
                </form>
            </div>
            </div>
            
            
        </div>
        </div>
        <div className="col-6 text-center auth-bg-right-img">
            <div className="row justify-content-center">
                <div className="col-12 d-flex flex-wrap vh-100 text-center">
                    <h4 className="text-dark  flex-fill display-5"><img
                  src="/assets/images/SAS2.png"
                  height="70"
                  alt="MDB Logo"
                  loading="lazy"
                /> Student Assistance System</h4>
                    <p className="text-dark fw-bolder flex-fill align-self-end mx-2">
                        Student Assistance System is an Online Platform designed to have 
                        a single point of accesss to all academic information for the faculty and the students. 
                        It also provides many features to aid academic duties and also help analyze student performance.
                        <br/><span className="text-secondary">&copy; SAS Pvt. Ltd.</span>
                    </p>
                </div> 
            </div>
        </div> 
        </div>  
    </div>
    {/* <div>
    <a href="https://www.freepik.com/free-vector/focused-people-studying-online-school_9650464.htm#query=student%20support&position=4&from_view=keyword&track=robertav1_2_sidr">Image by pch.vector</a> on Freepik
    </div> */}
    </>
    )
}

export default Login;