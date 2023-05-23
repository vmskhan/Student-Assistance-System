import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FacultyHome = () => {
    const userInfo = useSelector(state => state.auth.userInfo)
    const myCardStyle={
            backgroundColor: 'lightgreen'
    }
    const [cardData, setCardData] = useState([
        {
            title: "Notes",
            desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            link: "/faculty/Notes",
            image: "",
            style: myCardStyle,
        },
        {
            title: "Mock Interview",
            desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            link: "/faculty/Mock",
            image: "",
            style: myCardStyle,
        },
        {
            title: "Notifications",
            desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            link: "/faculty/Notifications",
            image: "",
            style: myCardStyle
        }, {
            title: "Attendance",
            desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            link: "/faculty/Attendance",
            image: "",
            style: myCardStyle,
        },
        {
            title: "Performance",
            desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            link: "/faculty/Performance",
            image: "",
            style: myCardStyle,
        },

    ]);
    return (
        <div className="container-fluid m-3">
            <section className="d-flex justify-content-center align-items-center fst-italic">
                <div className="">
                    <div className="h1 fw-bolder fs-1 text-center my-5">Welcome Home <span className="text-capitalize">{userInfo.name} </span></div>
                </div>

            </section>
            <br /><br /><br />
            <section className="">
                {/* <h1>cards</h1> */}
                <div className="row justify-content-around">
                    {cardData.map((card, index) => {
                        return (
                            <div className="card col-3 m-3" style={card.style} key={index}>
                                {/* <img src={card.image} className="card-img-top" alt="..."/> */}
                                <div className="card-body">
                                    <h6 className="card-title text-center">{card.title}</h6>
                                    <p className="card-text">{card.desc}</p>
                                    <div className="d-grid m-2">
                                        <Link to={card.link} className="btn btn-outline-primary stretched-link">Open</Link>
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
    )
}
export default FacultyHome;