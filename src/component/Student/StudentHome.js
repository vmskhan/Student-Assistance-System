import { useState } from "react";
import Chart from "react-google-charts";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const StudentHome = () => {
  const user=useSelector((state)=>state.auth.userInfo);
  const myCardStyle={
      backgroundColor: 'lightblue'
  };
    const [cardData,setCardData]=useState([
        {
        title:"Notes",
        desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        link:"/student/Notes",
        image:"/assets/images/notes.jpg",
        style: myCardStyle,
    },
    {
        title:"Personal Details",
        desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        link:"/student/Profile",
        image:"",
        style: myCardStyle,
    },
    {
        title:"View performance",
        desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        link:"/student/Performance",
        image:"",
        style: myCardStyle,
    },
    {
      title: "View Attendance",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "/student/Attendance",
      image: "",
      style: myCardStyle,
  },
  {
    title: "Mock Interview",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "/Student/Mock",
    image: "",
    style: myCardStyle,
},
{
  title: "View Notifications",
  desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  link: "/Student/Notifications",
  image: "",
  style: myCardStyle,
},
]);
    return (
        <div className="home container-fluid">
          <section className="d-flex justify-content-center align-items-center fst-italic">
            <div className="">
            <div className="h1 fw-bolder fs-1 text-center my-5">Hello, Welcome Home ,<span className="text-capitalize">{user.name}</span> </div>
            </div>
            
          </section>
          <br/><br/><br/>
            {/* <section className="">
            <h1>Performance graph</h1>
            <Chart
                chartType="ScatterChart"
                data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
                width="100%"
                height="400px"
                legendToggle
                />
            </section> */}
            <section className="">
            {/* <h1>cards</h1> */}
            <div className="row justify-content-around">
            { cardData.map((card,index)=>{
                return(    
            <div className="card col-3 m-3" style={card.style} key={index}>
            {/* <img src={card.image} className="card-img-top" alt="..."/> */}
            <div className="card-body">
                <h6 className="card-title">{card.title}</h6>
                <p className="card-text">{card.desc}</p>
                <div className="d-grid m-2">
                    <Link to={card.link} className="btn btn-outline-success stretched-link">Open</Link>
                </div>
            </div>
            </div>
            );
            })    
        }
        </div>
            </section>
            {/* <section className="">
            <h1>time table</h1>
            <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
            </section> */}
             <section className=""><br/><br/><br/><br/><br/><br/><br/><br/> </section>
        </div>
    )
}
export default StudentHome;