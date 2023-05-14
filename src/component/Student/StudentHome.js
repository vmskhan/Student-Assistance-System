import { useState } from "react";
import Chart from "react-google-charts";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const StudentHome = () => {
  const user=useSelector((state)=>state.auth.userInfo);
    const [cardData,setCardData]=useState([
        {
        title:"Notes",
        desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        link:"/student/Notes",
        image:"/assets/images/notes.jpg",
    },
    {
        title:"Personal Details",
        desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        link:"/student/Profile",
        image:"",
    },
    {
        title:"Academic performance",
        desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        link:"/student/Performance",
        image:"",
    },
]);
    return (
        <div className="home container">
          <section className="d-flex justify-content-center align-items-center fst-italic">
            <div className="">
            <div className="h1 fw-bolder fs-1 text-center my-5">Hello, Welcome Home ,{user.name} </div>
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
            <h1>cards</h1>
            <div className="row">
            { cardData.map((card,index)=>{
                return(    
            <div className="card col-4 mx-auto mb-3" style={{width: "18rem"}} key={index}>
            <img src={card.image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h6 className="card-title">{card.title}</h6>
                <p className="card-text">{card.desc}</p>
                <Link to={card.link} className="mx-auto"><button className="btn btn-primary">Go</button></Link>
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
        </div>
    )
}
export default StudentHome;