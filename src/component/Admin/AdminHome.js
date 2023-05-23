import { useState } from "react";
import Chart from "react-google-charts";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AdminHome=()=>{
    const userInfo=useSelector(state=>state.auth.userInfo);    
    const [cardData,setCardData]=useState([
        {
        title:"Admin Controls",
        desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        link:"/admin/Controls",
        image:"",
        style:{
            backgroundColor:'#db4b54'
        },
    },
    {
        title:"Faculty Profiles",
        desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        link:"/admin/FacultyProfiles",
        image:"",
        style:{
            backgroundColor:'#db4b54'
        },
    },
    {
        title:"Student Profiles",
        desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        link:"/admin/StudentProfiles",
        image:"",
        style:{
            backgroundColor:'#db4b54'
        },
    },
    {
        title:"Institution Info",
        desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        link:"/admin/InstitutionInfo",
        image:"",
        style:{
            backgroundColor:'#db4b54'
        },
    },
    {
        title:"Time Tables",
        desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        link:"/admin/timeTables",
        image:"",
        style:{
            backgroundColor:'#db4b54'
        },
    },
    {
        title:"Notifications",
        desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        link:"/admin/Notifications",
        image:"",
        style:{
            backgroundColor:'#db4b54'
        },
    },
]);
    return(
            <div className="home">
                <section>
                    <div className="d-flex justify-content-center m-5">
                        <div className="fs-2 fw-bolder fst-italic">Welcome Home, {userInfo.name}</div>
                    </div>
                </section>
{/*     
                <section>
                <h1>performance graph</h1>
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
                { cardData.map((card)=>{
                    return(    
                <div className="card col-3 m-3" style={card.style}>
                {/* <img src={card.image} className="card-img-top" alt="..."/> */}
                <div className="card-body">
                    <h6 className="card-title text-center fw-bolder">{card.title}</h6>
                    <p className="card-text">{card.desc}</p>
                    <div className="d-grid m-2">
                        <Link to={card.link} className="btn btn-outline-light">Open</Link>
                    </div>
                </div>
                </div>
                );
                })    
            }
            </div>
                </section>
                <section className=""><br/><br/><br/><br/><br/><br/><br/><br/> </section>
            </div>
    );
}
export default AdminHome;