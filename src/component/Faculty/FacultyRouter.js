import { Outlet } from "react-router-dom"
import FacultyNavbar from "./FacultyNavbar"
import Footer from "../Common/Footer";

const FacultyRouter = () => {
    return (
        <div>
            <FacultyNavbar />
            <Outlet />
            <Footer />
        </div>
    )
}
export default FacultyRouter;