import { Link } from "react-router-dom";

const StudentMockInterview=()=>{
    return(
        <div>
             <section className="vh-100 d-flex justify-content-center align-items-center bg-warning">
            <div className="">
            <div className="h1 fw-bolder fs-1 text-center my-5">Mock Interview</div>
            <div className="text-center"><a href="http://localhost:5000" className="btn btn-outline-dark fs-5 fw-bolder">Go to Interview</a></div>
            
            </div>
            
          </section>
        </div>
    );
}
export default StudentMockInterview;