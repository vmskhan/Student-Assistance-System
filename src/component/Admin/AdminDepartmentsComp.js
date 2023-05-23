import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDepartment, deleteDepartment, getAdminDepartments, updateDepartment } from "../../store/AdminActions/department-actions";

const AdminDepartmentsComponent = () => {
    const [deptId, setDeptId] = useState("");
    const [deptName, setDeptName] = useState("");
    const [deptCode, setDeptCode] = useState("");
    const departments = useSelector(state => state.admin.departments);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAdminDepartments());
    }, []);

    const addNewDept = () => {
        let data = {
            name: deptName,
            code: deptCode,
        }
        // console.log(data);
        dispatch(createDepartment(data));
    }

    const deleteDept = (id) => {
        dispatch(deleteDepartment(id));
    }

    const editDept = () => {
        let data = {
            deptId: deptId,
            name: deptName,
            code: deptCode,
        }
        // console.log(data);
        dispatch(updateDepartment(data));
    }

    const editDeptInitializer = (dept) => {
        setDeptId(dept._id);
        setDeptName(dept.name);
        setDeptCode(dept.code);
    }

    return (<>
        {departments &&
            <>
                <h4 className="my-4">Departments</h4>
                <div className="row mb-3">
                    <p className="col"></p>
                    <button className="btn btn-success col-2 mx-3" data-bs-toggle="modal" data-bs-target="#addDeptModal"><i className="bi bi-plus-lg"></i> Add Department</button>
                </div>
                <table className="table table-bordered  border-dark " style={{ border: "2px solid black" }}>
                    <thead>
                        <tr>
                            <th scope="col">S.No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Department Code</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {departments.map((dept, index) => {

                            return (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{dept.name}</td>
                                    <td>{dept.code}</td>
                                    <td>
                                        <button className="btn btn-info" data-bs-target="#editDeptModal" data-bs-toggle="modal" onClick={(e) => editDeptInitializer(dept)}>Edit</button>
                                        <button className="btn btn-danger ms-1" onClick={() => deleteDept(dept._id)} >delete</button>
                                    </td>
                                </tr>
                            );
                        })
                        }
                    </tbody>
                </table>

                {/* Modals */}
                {/* Add Department modal */}
                <div className="modal" id="addDeptModal" tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add new Department</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p>Enter details for new Department</p>

                                <label className="form-label">Department Name</label>
                                <input type="text" className="form-control" placeholder="Enter Dept name" onChange={(e) => setDeptName(e.target.value)} value={deptName} />

                                <label className="form-label">Department Code</label>
                                <input type="text" className="form-control" placeholder="Enter Dept Code" onChange={(e) => setDeptCode(e.target.value)} value={deptCode} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-success" onClick={addNewDept}>Add</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Edit department Modal */}
                <div className="modal" id="editDeptModal" tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Department Info</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p>Edit details for Department</p>

                                <label className="form-label">Department Name</label>
                                <input type="text" className="form-control" placeholder="Enter Dept name" onChange={(e) => setDeptName(e.target.value)} value={deptName} />

                                <label className="form-label">Department Code</label>
                                <input type="text" className="form-control" placeholder="Enter Dept Code" onChange={(e) => setDeptCode(e.target.value)} value={deptCode} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-success" onClick={editDept}>Save Changes</button>
                            </div>
                        </div>
                    </div>
                </div>

            </>}
    </>)
}

export default AdminDepartmentsComponent;