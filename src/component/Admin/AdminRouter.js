import { Outlet } from "react-router-dom"
import AdminNavbar from "./AdminNavbar";

const AdminRouter=()=>{
    return(
        <div>
            <AdminNavbar/>
            <Outlet/>
        </div>
    )
}
export default AdminRouter;