import { useState } from "react";
import Chart from "react-google-charts";

const AdminHome=()=>{
    
    const [cardData,setCardData]=useState([
        {
        title:"Admin Controls",
        desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        link:"/admin/Controls",
        image:"",
    },
    {
        title:"Faculty Profiles",
        desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        link:"/admin/FacultyProfiles",
        image:"",
    },
    {
        title:"Student Profiles",
        desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        link:"/admin/StudentProfiles",
        image:"",
    },
    {
        title:"Academic performance",
        desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        link:"/admin/Performance",
        image:"",
    },
    {
        title:"Attendance",
        desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        link:"/admin/Attendance",
        image:"",
    },
    {
        title:"Notifications",
        desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        link:"/admin/Notifications",
        image:"",
    },
]);
    return(
            <div className="home">
    
                <section>
                <h1>performance graph</h1>
                <Chart
                    chartType="ScatterChart"
                    data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
                    width="100%"
                    height="400px"
                    legendToggle
                    />
                </section>
                <section>
                <h1>cards</h1>
                <div className="row">
                { cardData.map((card)=>{
                    return(    
                <div className="card col-4 mx-auto mb-3" style={{width: "18rem"}}>
                <img src={card.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h6 className="card-title">{card.title}</h6>
                    <p className="card-text">{card.desc}</p>
                    <a href={card.link} className="mx-auto"><button className="btn btn-primary">Go</button></a>
                </div>
                </div>
                );
                })    
            }
            </div>
                </section>
                
            </div>
    );
}
export default AdminHome;