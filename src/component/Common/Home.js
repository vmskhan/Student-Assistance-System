import { useEffect, useState } from "react";
import Chart from "react-google-charts";
import Navbar from "./Navbar";
import './home.css';
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const isLoggedIn=useSelector(state=>state.auth.isLoggedIn);
  const navigate=useNavigate();
  const user=JSON.parse(localStorage.getItem('userInfo'));

  // useEffect(()=>{
  //   if(user && isLoggedIn)
  //       navigate('/'+user.role+'/home');
  //     },[isLoggedIn]);

    const [cardData,setCardData]=useState([
        {
        title:"Notes",
        desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        link:"/Feature/Notes",
        image:"",
    },
    {
        title:"Certificates",
        desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        link:"/Feature/Certificates",
        image:"",
    },
    {
        title:"Personal Details",
        desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        link:"/Feature/Profile",
        image:"",
    },
    {
        title:"Academic performance",
        desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        link:"/Feature/Performance",
        image:"",
    },
    {
        title:"Self Learning",
        desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        link:"/Feature/Selflearn",
        image:"",
    },
]);
    return (
        <div className="home">
          <Navbar/>
            <section className="container" id="section-1">
              <div className="mx-auto banner vh-100">
                <div className="text-center align-self-center">
                  <h1>Welcome Students and Faculty</h1>
                  <h5>To Student Assistance System</h5>
                  <Link to="#section-2"><button className="btn btn-primary">Know more</button></Link>
                </div>  
              </div>
            </section>

            <section id="section-2">
              <hr className="text-primary border border-primary"/>
            <h2 className="text-center text-decoration-underline">About us</h2>
            <section>
                This is a system made to aid student snad teacher sin mananging academic lifeThis is a useful system for students where they can review
              their academic performance.This is a useful system for students where they can review
              their academic performance.This is a useful system for students where they can review
              their academic performance.This is a useful system for students where they can review
              their academic performance.This is a useful system for students where they can review
              their academic performance.This is a useful system for students where they can review
              their academic performance.This is a useful system for students where they can review
              their academic performance.This is a useful system for students where they can review
              their academic performance.
              </section>
              <br/>
          <div className="row justify-content-evenly">
            <div className="col-5">
            <h2 className="text-center">Students</h2>
            <p>This is a useful system for students where they can review
              their academic performance.This is a useful system for students where they can review
              their academic performance.This is a useful system for students where they can review
              their academic performance.This is a useful system for students where they can review
              their academic performance.This is a useful system for students where they can review
              their academic performance.This is a useful system for students where they can review
              their academic performance.This is a useful system for students where they can review
              their academic performance.
            </p>
            <p>Students can register here</p>
              <div className="text-center">
              <Link to="/StudentRegister"><button className="btn btn-primary">Student signup</button></Link>
              </div>
            </div>
            <div className="vr bg-success"></div>
            <div className="col-5">
            <h2 className="text-center">Faculty and Admin</h2>
            <p>This is a useful system for teachers where they can track
              students academic performanceThis is a useful system for students where they can review
              their academic performance.This is a useful system for students where they can review
              their academic performance.This is a useful system for students where they can review
              their academic performance.This is a useful system for students where they can review
              their academic performance.This is a useful system for students where they can review
              their academic performance.
            </p>
            <p>Teachers can register here</p>
              <div className="text-center">
              <Link to="/FacultyRegister" className="mx-auto"><button className="btn btn-primary">Faculty signup</button></Link>
              </div>
            </div>
          </div>
            </section>
            <br/>
            <br/>
            <Footer/>
        </div>
    )
}
export default Home;