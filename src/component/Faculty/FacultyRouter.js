import { Outlet } from "react-router-dom"
import FacultyNavbar from "./FacultyNavbar"

const FacultyRouter=()=>{
    return(
        <div>
            <FacultyNavbar/>
            <Outlet/>
        </div>
    )
}
export default FacultyRouter;