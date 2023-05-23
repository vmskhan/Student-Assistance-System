import AdminDepartmentsComponent from "./AdminDepartmentsComp";
import AdminCoursesComponent from "./AdminCoursesComponent";
import AdminSubjectComponent from "./AdminSubjectComponent";
import AdminSectionComponent from "./AdminSectionComponent";

const AdminInstitutionInfo=()=>{

    return(<>
    <div className="container">
            <div className="card m-5">
                <div className="card-body">
                    <h2 className="card-title">Institution Info</h2>
                    <p className="card-text">These are special admin controls to add the necessary details to operate the SAS system like adding departments, subjects and sections avalible in the college</p>
                    <AdminDepartmentsComponent/>
                    <AdminCoursesComponent/>
                    <AdminSubjectComponent/>
                    <AdminSectionComponent/>                    
                </div>
            </div>
            <section className=""><br/><br/><br/><br/><br/><br/><br/><br/> </section>
        </div>
    </>);
}

export default AdminInstitutionInfo;