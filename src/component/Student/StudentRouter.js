import { Outlet } from "react-router-dom";
import StudentNavbar from "./StudentNavbar";

const StudentRouter=()=>{
    return(
        <>
        <StudentNavbar/>
        <Outlet/>
        </>
    );
}
export default StudentRouter;