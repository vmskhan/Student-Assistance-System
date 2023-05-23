import { Outlet } from "react-router-dom";
import StudentNavbar from "./StudentNavbar";
import Footer from "../Common/Footer";

const StudentRouter=()=>{
    return(
        <>
        <StudentNavbar/>
        <Outlet/>
        <Footer/>
        </>
    );
}
export default StudentRouter;