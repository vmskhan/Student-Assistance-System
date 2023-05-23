import React from "react";
import Container from "react-bootstrap/Container";
import { Link, NavLink } from "react-router-dom";

const Footer = (props) => {
    const handleScroll = (refvar) => {

        // e.preventDefault();
        const main = refvar.current;
        window.scrollTo({
            top: main.offsetTop,
            left: 0,
            behavior: "instant"
        });
    }
    const bgStyle = { backgroundColor: "#f5f5f5" };

    return (
        <footer className="text-center  border-2 border-top" style={{ backgroundColor: "#99ffcc" }}>
            <div className="row text-center">
                <div className="col-12">
                    <img
                        src="/assets/images/SAS2.png"
                        height="70"
                        alt="MDB Logo"
                        loading="lazy"
                    />
                    <span className="fs-3 fw-bold align-middle"> Student Assistance System</span>
                </div>
            </div>
            <div className="row ">
                <div className="col-12 text-start align-self-end mb-1 ">
                    <div className="d-flex justify-content-around ">
                        <div >
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item bg-transparent"><Link to="/" className="text-dark fs-5 fw-bold text-decoration-none"><i className="bi bi-filter-right"></i>Home</Link></li>
                                <li className="list-group-item ps-4 bg-transparent">Students</li>
                                <li className="list-group-item ps-4 bg-transparent">Faculty</li>
                                <li className="list-group-item ps-4 bg-transparent">Admin</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item bg-transparent"><Link to="/#aboutUs" onClick={() => handleScroll(props.aboutUsRef)} className="text-dark fs-5 fw-bold text-decoration-none"><i className="bi bi-filter-right"></i>About us</Link></li>
                                <li className="list-group-item ps-4 bg-transparent">Why SAS</li>
                                <li className="list-group-item ps-4 bg-transparent">About SAS</li>
                                {/* <li className="list-group-item ps-4"></li> */}
                            </ul>
                        </div>
                        <div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item bg-transparent"><Link to="/#students" onClick={() => handleScroll(props.studentsRef)} className="text-dark fs-5 fw-bold text-decoration-none"><i className="bi bi-filter-right"></i>Students</Link></li>
                                <li className="list-group-item ps-4 bg-transparent">SAS for students</li>
                                <li className="list-group-item ps-4 bg-transparent">Student signup</li>
                                {/* <li className="list-group-item ps-4">I</li> */}
                            </ul>
                        </div>
                        <div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item bg-transparent"><Link to="/#faculty" onClick={() => handleScroll(props.facultyRef)} className="text-dark fs-5 fw-bold text-decoration-none"><i className="bi bi-filter-right"></i>Faculty</Link></li>
                                <li className="list-group-item ps-4 bg-transparent">SAS for faculty</li>
                                <li className="list-group-item ps-4 bg-transparent">Faculty signup</li>
                                {/* <li className="list-group-item ps-4">Admin</li> */}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <div className="col-12 mb-1 pe-3">
                <div className="d-flex justify-content-around">
                    <Link className="btn btn-outline-dark border-0 fs-5"><i className="bi bi-twitter"></i></Link>
                    <Link className="btn btn-outline-dark border-0 fs-5"><i className="bi bi-linkedin"></i></Link>
                    <Link className="btn btn-outline-dark border-0 fs-5"><i className="bi bi-instagram"></i></Link>
                    <Link className="btn btn-outline-dark border-0 fs-5"><i className="bi bi-youtube"></i></Link>
                    <Link className="btn btn-outline-dark border-0 fs-5"><i className="bi bi-meta"></i></Link>
                    <Link className="btn btn-outline-dark border-0 fs-5"><i className="bi bi-whatsapp"></i></Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;