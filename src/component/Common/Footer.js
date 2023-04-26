import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const Footer = (props) => {
    const bgStyle = { backgroundColor: "#f5f5f5" };

    return (
        <footer style={bgStyle} className="mt-auto py-5 text-center ">
            <Container>
                {props.children}
                <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "}
                <Link
                    rel="noopener"
                    to="https://github.com/hashirshoaeb"
                    aria-label="My GitHub"
                > <span className="badge bg-dark">
                        STUDENT OF MJCET
                    </span>
                </Link>{" "}
                using <i className="fab fa-react" />
                <p>

                    <Link to="https://www.freepik.com/free-vector/illustration-university-graduates_2944806.htm#query=graduation&position=0&from_view=keyword">Image by rawpixel.com</Link> on Freepik
                </p>
            </Container>
        </footer>
    );
};

export default Footer;