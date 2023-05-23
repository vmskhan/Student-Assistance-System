import { Outlet } from "react-router-dom"
import AdminNavbar from "./AdminNavbar";
import Footer from "../Common/Footer";

const AdminRouter = () => {
    return (
        <div>
            <AdminNavbar />
            <Outlet />
            <Footer />
        </div>
    )
}
export default AdminRouter;