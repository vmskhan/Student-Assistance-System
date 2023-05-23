import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminCourses } from "../../store/AdminActions/course-actions";
import { createSection, deleteSection, getAdminSections, updateSection } from "../../store/AdminActions/section-actions";

const AdminSectionComponent = () => {

    const [courseId, setCourseId] = useState("");
    const [sectionId, setSectionId] = useState("");
    const [sectionName, setSectionName] = useState("");
    const [year, setYear] = useState(1);
    const [sem, setSem] = useState(1);
    const timeTableId = "Nil";

    const courses = useSelector(state => state.admin.courses);
    const sections = useSelector(state => state.admin.sections);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAdminCourses());
        dispatch(getAdminSections());
    }, []);
    useEffect(() => {
        console.log(sections);
    }, [sections])
    const addNewSection = () => {
        let data = {
            name: sectionName,
            year: year,
            sem: sem,
            courseId: courseId,
        }
        // console.log(data);
        dispatch(createSection(data));
    }

    const deleteSectionWithId = (id) => {
        dispatch(deleteSection(id));
    }

    const editSection = () => {
        let data = {
            sectionId: sectionId,
            name: sectionName,
            year: year,
            sem: sem,
            courseId: courseId,
            timeTableId: timeTableId
        }
        // console.log(data);
        dispatch(updateSection(data));
    }

    const editSectionInitializer = (section) => {
        setSectionId(section._id);
        setSectionName(section.name);
        setYear(section.year);
        setSem(section.sem);
        setCourseId(section.courseId);
    }

    const semChangeHandler = (value) => {
        setSem(value);
        setYear(Math.ceil(value / 2));
    }
    return (<>
        {sections && courses &&
            <>

                <div className="row my-3">
                    <h4 className="col my-4">Sections</h4>
                    <div className="row mb-3">
                        <p className="col"></p>
                        <button className="btn btn-success col-2 mx-3" data-bs-toggle="modal" data-bs-target="#addSectionModal" ><i className="bi bi-plus-lg"></i> Add Section</button>
                    </div>
                </div>

                <table className="table table-bordered align-middle text-center border-dark " style={{ border: "2px solid black" }}>
                    <thead>
                        <tr>
                            <th scope="col">S.No.</th>
                            <th scope="col">Section</th>
                            <th scope="col">Semester</th>
                            <th scope="col">Year</th>
                            <th scope="col">Course</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {sections.map((sec, index) => {

                            return (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{sec.name}</td>
                                    <td>{sec.sem}</td>
                                    <td>{sec.year}</td>
                                    <td>{courses.find((c) => c._id === sec.courseId).code}</td>
                                    <td>
                                        <button className="btn btn-info" data-bs-target="#editSectionModal" data-bs-toggle="modal" onClick={(e) => editSectionInitializer(sec)}>Edit</button>
                                        <button className="btn btn-danger ms-1" onClick={() => deleteSectionWithId(sec._id)}>delete</button>
                                    </td>
                                </tr>
                            );
                        })
                        }
                    </tbody>
                </table>

                {/* Modals */}
                {/* add Section modal */}
                <div className="modal" id="addSectionModal" tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add new Section</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p>Enter details for new Section</p>

                                <label className="form-label">Section Name</label>
                                <input type="text" className="form-control" placeholder="Enter Section name(A,B,C,etc.)" onChange={(e) => setSectionName(e.target.value)} value={sectionName} />

                                <label className="form-label">Semester</label>
                                <input type="number" className="form-control" placeholder="Enter semester" onChange={(e) => semChangeHandler(e.target.value)} value={sem} />

                                <label className="form-label">Year</label>
                                <input type="number" className="form-control" placeholder="Enter Year" value={year} disabled />

                                <label className="form-label">Course</label>
                                <select type="text" className="form-select" onChange={(e) => setCourseId(e.target.value)} value={courseId}>
                                    <option>Select Course</option>
                                    {courses.map((course) => {
                                        return (
                                            <option value={course._id}>{course.code}</option>
                                        );
                                    })
                                    }
                                </select>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-success" onClick={addNewSection}>Add</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Edit Section modal */}
                <div className="modal" id="editSectionModal" tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Section Details</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p>Edit details for Section</p>

                                <label className="form-label">Section Name</label>
                                <input type="text" className="form-control" placeholder="Enter Section name(A,B,C,etc.)" onChange={(e) => setSectionName(e.target.value)} value={sectionName} />

                                <label className="form-label">Semester</label>
                                <input type="number" className="form-control" placeholder="Enter semester" onChange={(e) => semChangeHandler(e.target.value)} value={sem} />

                                <label className="form-label">Year</label>
                                <input type="number" className="form-control" placeholder="Enter Year" value={year} disabled />

                                <label className="form-label">Course</label>
                                <select type="text" className="form-select" onChange={(e) => setCourseId(e.target.value)} value={courseId}>
                                    <option>Select Course</option>
                                    {courses.map((course) => {
                                        return (
                                            <option value={course._id}>{course.code}</option>
                                        );
                                    })
                                    }
                                </select>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-success" onClick={editSection}>Save Changes</button>
                            </div>
                        </div>
                    </div>
                </div>

            </>}
    </>)
}

export default AdminSectionComponent;