import { useEffect, useRef, useState } from "react";
import Chart from "react-google-charts";
import Navbar from "./Navbar";
import './home.css';
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import studjpg from "./students.jpg";
import facultyjpg from "./faculty.jpg";
import aboutusjpg from "./aboutUs.jpg"
const Home = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('userInfo'));
  const studentsRef = useRef();
  const aboutUsRef = useRef();
  const facultyRef = useRef();
  // useEffect(()=>{
  //   if(user && isLoggedIn)
  //       navigate('/'+user.role+'/home');
  //     },[isLoggedIn]);

  const [cardData, setCardData] = useState([
    {
      title: "Notes",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "/Feature/Notes",
      image: "",
    },
    {
      title: "Certificates",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "/Feature/Certificates",
      image: "",
    },
    {
      title: "Personal Details",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "/Feature/Profile",
      image: "",
    },
    {
      title: "Academic performance",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "/Feature/Performance",
      image: "",
    },
    {
      title: "Self Learning",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "/Feature/Selflearn",
      image: "",
    },
  ]);
  return (
    <div className="home">
      <Navbar />
      <section className="container" id="section-1">
        <div className="mx-auto banner vh-100">
          <div className="text-center align-self-center">
            <br />
            <h1>Welcome Students and Faculty</h1>
            <h5>To Student Assistance System</h5>
            <Link to="#section-2"><button className="btn btn-primary">Know more</button></Link>
          </div>
        </div>
      </section>
      <br />
      <br />
      <section id="aboutUs" className="vh-100 px-5 border-2 border-top">
        <br />

        <div className="row justify-content-evenly">
          <div className="col-6 ">
            <img src={aboutusjpg} className="img-fluid" />
          </div>
          <div className="col-6 align-self-center">
            <h2 className="text-center fst-italic fw-bold me-5">About Us</h2>
            <br />
            <p>
              Our student assistant system is designed to streamline the academic journey
              for students, providing them with access to a wide range of tools and
              resources that can help them succeed.Whether you're a student looking for help with a particular assignment,
              or an educator looking to improve the learning experience for your students, our student assistant
              system has something to offer for everyone. More Than just a platform, our student
              assistant system represents a commitment to excellence in education and a dedication
              to helping students reach their full potential. With many features like
              progress tracking, notes sharing, performance analysis and more, our system empowers students to
              take control of their academic journey and achieve success on their own terms.
            </p>
            <div className="text-center">
              <Link to="/login"><button className="btn btn-primary">Login</button></Link>
            </div>
          </div>
        </div>

      </section>
      <br />

      <section id="students" className="vh-100 px-5 border-2 border-top" ref={studentsRef}>

        <div className="row justify-content-evenly">

          <div className="col-6 align-self-center">
            <h2 className="text-center fst-italic fw-bolder">Student</h2>
            <br />
            <p>Our student assistant system is designed with the needs of students in mind.
              We understand that students today face a variety of challenges in their academic journey,
              from navigating complex coursework to managing competing demands on their time.
              That's why our system is designed to help students at every step of the way, providing
              them with the support and resources they need to succeed.
            </p>

            <p>
              Another important aspect of our system is real-time progress tracking. Our system provides
              students with detailed feedback on their performance, allowing them to track their progress
              and identify areas where they need to improve. This helps students stay on track and make
              steady progress towards their goals.
            </p>
            {/* <p>Students can register here</p> */}
            <div className="text-center">
              <Link to="/StudentRegister"><button className="btn btn-primary">Student signup</button></Link>
            </div>
          </div>
          <div className="col-6">
            <img src={studjpg} className="img-fluid" />
          </div>

        </div>
      </section>
      <section id="faculty" className="vh-100 px-5 border-2 border-top">


        <div className="row justify-content-evenly">

          <div className="col-6">
            <img src={facultyjpg} className="img-fluid" />
          </div>

          <div className="col-6 align-self-center">
            <br />
            <h2 className="text-center fw-bolder fst-italic">Faculty and Admin</h2>
            <br />
            <p>Our student assistant system is not only designed to help students succeed,
              but also to support faculty and administrators in their roles. We understand
              that faculty and administrators play a critical role in shaping the academic
              experience for students, and our system is designed to make their jobs easier
              and more effective.
            </p>
            <p>
              For faculty, our student assistant system provides a range of tools and resources
              to help them better engage with students and deliver more effective instruction.
              For example, our system includes features like progress tracking, which
              allows faculty to monitor students' progress and identify areas where additional
              support may be needed.
            </p>
            <p>
              For administrators, our student assistant system offers a range of benefits as well.
              Our system includes detailed analytics and reporting tools that enable administrators
              to monitor student performance and identify areas where additional resources may be needed.
              This can help administrators make more informed decisions about resource allocation and program
              development.

            </p>
            {/* <p>Teachers can register here</p> */}
            <div className="text-center">
              <Link to="/FacultyRegister" className="mx-auto"><button className="btn btn-primary">Faculty signup</button></Link>
            </div>
          </div>

        </div>
      </section>
      {/* <br/>
            <br/> */}
      <Footer studentsRef={studentsRef} aboutUsRef={aboutUsRef} facultyRef={facultyRef} />
    </div>
  )
}
export default Home;