import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminDepartments } from "../../store/AdminActions/department-actions";
import { createCourse, deleteCourse, getAdminCourses, updateCourse } from "../../store/AdminActions/course-actions";

const AdminCoursesComponent = () => {
    const [deptId, setDeptId] = useState("");

    const [courseId, setCourseId] = useState("");
    const [courseName, setCourseName] = useState("");
    const [courseCode, setCourseCode] = useState("");
    const [intake, setIntake] = useState(0);

    const departments = useSelector(state => state.admin.departments);
    const courses = useSelector(state => state.admin.courses);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAdminDepartments());
        dispatch(getAdminCourses());
    }, []);

    const addNewCourse = () => {
        let data = {
            name: courseName,
            code: courseCode,
            intake: intake,
            deptId: deptId
        }
        // console.log(data);
        dispatch(createCourse(data));
    }

    const deleteCourseWithId = (id) => {
        dispatch(deleteCourse(id));
    }

    const editCourse = () => {
        let data = {
            courseId: courseId,
            name: courseName,
            code: courseCode,
            intake: intake,
            deptId: deptId
        }
        // console.log(data);
        dispatch(updateCourse(data));
    }

    const editCourseInitializer = (course) => {
        setCourseId(course._id);
        setCourseName(course.name);
        setCourseCode(course.code);
        setIntake(course.intake);
        setDeptId(course.deptId);

    }

    return (<>
        {departments && courses &&
            <>
                <div className="row my-3">
                    <h4 className="col my-4">Courses</h4>
                    <div className="row mb-3">
                        <p className="col">Courses available,</p>
                        <button className="btn btn-success col-2 mx-3" data-bs-toggle="modal" data-bs-target="#addCourseModal" ><i className="bi bi-plus-lg"></i> Add Course</button>
                    </div>
                </div>

                <table className="table table-bordered  border-dark " style={{ border: "2px solid black" }}>
                    <thead>
                        <tr>
                            <th scope="col">S.No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Course code</th>
                            <th scope="col">Intake</th>
                            <th scope="col">Department</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {courses.map((course, index) => {

                            return (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{course.name}</td>
                                    <td>{course.code}</td>
                                    <td>{course.intake}</td>
                                    <td>{departments.find((dept) => dept._id === course.deptId).code}</td>
                                    <td>
                                        <button className="btn btn-info" data-bs-target="#editCourseModal" data-bs-toggle="modal" onClick={(e) => editCourseInitializer(course)}>Edit</button>
                                        <button className="btn btn-danger ms-1" onClick={() => deleteCourseWithId(course._id)}>delete</button>
                                    </td>
                                </tr>
                            );
                        })
                        }
                    </tbody>
                </table>

                {/* Modals */}
                {/* Add Course Modal */}
                <div className="modal" id="addCourseModal" tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add new Course</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p>Enter details for new Course</p>

                                <label className="form-label">Course Name</label>
                                <input type="text" className="form-control" placeholder="Enter Course name" onChange={(e) => setCourseName(e.target.value)} value={courseName} />

                                <label className="form-label">Course Code</label>
                                <input type="text" className="form-control" placeholder="Enter Course Code" onChange={(e) => setCourseCode(e.target.value)} value={courseCode} />

                                <label className="form-label">Intake</label>
                                <input type="number" className="form-control" placeholder="Enter Intake" onChange={(e) => setIntake(e.target.value)} value={intake} />

                                <label className="form-label">Department</label>
                                <select type="text" className="form-select" onChange={(e) => setDeptId(e.target.value)} value={deptId}>
                                    <option>Select Department</option>
                                    {departments.map((dept) => {
                                        return (
                                            <option value={dept._id}>{dept.code}</option>
                                        );
                                    })
                                    }
                                </select>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-success" onClick={addNewCourse}>Add</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Edit Course Modal */}
                <div className="modal" id="editCourseModal" tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Course details</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p>Edit details for Course</p>

                                <label className="form-label">Course Name</label>
                                <input type="text" className="form-control" placeholder="Enter Course name" onChange={(e) => setCourseName(e.target.value)} value={courseName} />

                                <label className="form-label">Course Code</label>
                                <input type="text" className="form-control" placeholder="Enter Course Code" onChange={(e) => setCourseCode(e.target.value)} value={courseCode} />

                                <label className="form-label">Intake</label>
                                <input type="number" className="form-control" placeholder="Enter Intake" onChange={(e) => setIntake(e.target.value)} value={intake} />

                                <label className="form-label">Department</label>
                                <select type="text" className="form-select" onChange={(e) => setDeptId(e.target.value)} value={deptId}>
                                    <option>Select Department</option>
                                    {departments.map((dept) => {
                                        return (
                                            <option value={dept._id}>{dept.code}</option>
                                        );
                                    })
                                    }
                                </select>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-success" onClick={editCourse}>Save Changes</button>
                            </div>
                        </div>
                    </div>
                </div>

            </>}
    </>)
}

export default AdminCoursesComponent;