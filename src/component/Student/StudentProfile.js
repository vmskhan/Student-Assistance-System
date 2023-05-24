import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoursesForStudent, getProfileForStudent, getSectionsForStudent, updateStudentProfile } from "../../store/student-actions";

const StudentProfile = () => {
    const userInfo = useSelector((state) => state.auth.userInfo);
    const profile = useSelector((state) => state.student.profile);
    const courses = useSelector((state) => state.student.courses);
    const sections = useSelector((state) => state.student.sections);
    const dispatch = useDispatch();

    const baseUrl = process.env.REACT_APP_IMAGE_UPLOADS_BASE_URL;
    const [courseId, setCourseId] = useState("");
    const [sectionId, setSectionId] = useState("");
    const [joiningDate, setJoiningDate] = useState(0);
    const [phoneNo, setPhoneNo] = useState("");
    const [fathersName, setFathersName] = useState("");
    const [mothersName, setMothersName] = useState("");

    useEffect(() => {
        dispatch(getProfileForStudent(userInfo._id));
        dispatch(getCoursesForStudent());
        dispatch(getSectionsForStudent());
    }, [])
    useEffect(() => {
        console.log(profile);
    }, [profile])
    useEffect(() => {
        console.log(sections);
    }, [sections])
    const editInitializer = () => {
        if (profile.courseId !== null)
            setCourseId(profile.courseId);
        if (profile.sectionId !== null)
            setSectionId(profile.sectionId);
        if (profile.batch !== 'N/A')
            setJoiningDate(profile.batch);
        setPhoneNo(profile.phoneNumber);
        setFathersName(profile.fathersName);
        setMothersName(profile.mothersName);
    }

    const updateHandler = () => {
        let data = {
            studentId: userInfo._id,
            fathersName,
            mothersName,
            phoneNumber: phoneNo,
            batch: joiningDate,
            sectionId,
            courseId,
        }
        console.log(data);
        dispatch(updateStudentProfile(data));
    }

    return (<>{sections && courses &&
        <>
            <div>
                <section className="d-flex justify-content-center align-items-center bg-info">
                    <div className="">
                        <div className="h1 fw-bolder fs-1 text-center my-5">Profile</div>
                    </div>

                </section>
                <div className="container-fluid">
                    <div className="card m-5 p-5">
                        <div className="card-body">
                            <div className="fs-2 fw-bolder text-center">
                                STUDENT PROFILE
                            </div>
                            <div className="fs-3">
                                Account Details
                            </div>

                            <section className="row">
                                <div className="col-8 fs-5">
                                    <label className="form-label">Name</label>
                                    <input type="text" name="Name" className="form-control" value={userInfo.name} disabled />
                                    <br />
                                    <label className="form-label">Email</label>
                                    <input type="email" name="Email" className="form-control" value={userInfo.email} disabled />
                                    <br />
                                    <label className="form-label">Role</label>
                                    <input type="text" name="Role" className="form-control" value={userInfo.role} disabled />
                                    <br />
                                    <label className="form-label">Status</label>
                                    <input type="text" name="Status" className="form-control" value={userInfo.status} disabled />
                                    <br />
                                </div>
                                <div className="col-4">
                                    {userInfo.pic !== 'Nil' ? (
                                        <img src={baseUrl + userInfo.pic} className="img-fluid rounded-circle h-75" alt="Profile pic" />
                                    ) : (
                                        <img
                                            src="/assets/images/logo1.png"
                                            className="rounded-circle img-fluid"
                                            alt="Black and White Portrait of a Man"
                                            loading="lazy"
                                        />
                                    )}
                                </div>
                            </section>

                        </div>
                    </div>
                    <div className="card m-5 p-5">
                        <div className="card-body">
                            <section>
                                <div className="d-flex justify-content-between">
                                    <div className="fs-3">Academic Details</div>
                                    <button onClick={editInitializer} className="btn btn-outline-success fs-5 fw-bold" data-bs-toggle="modal" data-bs-target="#editAcademicModal">
                                        <i className="bi bi-pencil"></i> Edit
                                    </button>

                                </div>
                                <div className="fs-5">
                                    <label className="form-label">Roll No</label>
                                    <input type="text" name="Roll No." className="form-control" value={userInfo.userId} disabled />
                                    <br />
                                    <label className="form-label">Branch</label>
                                    <input type="text" name="Branch" className="form-control" value={profile.courseName} disabled />
                                    <br />
                                    <label className="form-label">Year</label>
                                    <input type="text" name="class" className="form-control" value={profile.year} disabled />
                                    <br />
                                    <label className="form-label">Semester</label>
                                    <input type="text" name="Semester" className="form-control" value={profile.sem} disabled />
                                    <br />
                                    <label className="form-label">Section</label>
                                    <input type="text" name="Section" className="form-control" value={profile.sectionName} disabled />
                                    <br />
                                    <label className="form-label">Joining Year</label>
                                    <input type="number" name="joiningYear" className="form-control" value={profile.batch} disabled />
                                    <br />
                                    <label className="form-label">Expected Year of Graduation</label>
                                    <input type="number" name="graduationYear" className="form-control" value={profile.batch} disabled />
                                    <br />
                                    <label className="form-label">Father's Name</label>
                                    <input type="text" name="fathersName" className="form-control" value={profile.fathersName} disabled />
                                    <br />
                                    <label className="form-label">Mother's Name</label>
                                    <input type="text" name="mothersName" className="form-control" value={profile.mothersName} disabled />
                                    <br />
                                    <label className="form-label">Phone No.</label>
                                    <input type="text" name="phoneNumber" className="form-control" value={profile.phoneNumber} disabled />
                                    <br />

                                    {/* <label className="form-label">No. of subjects in current semester</label>
                            <input type="number" name="" className="form-control" disabled />
                            <br/>
                            <label className="form-label">No. of backlogs</label>
                            <input type="number" name="" className="form-control" disabled />
                            <br/>
                            <label className="form-label">No. of credits earned</label>
                            <input type="number" name="" className="form-control" disabled />
                            <br/>
                            <label className="form-label">Limit of credits earnable</label>
                            <input type="number" name="" className="form-control" disabled />
                            <br/>
                            <label className="form-label">Total no. of credits in course</label>
                            <input type="number" name="" className="form-control" disabled />
                            <br/> */}

                                </div>
                                <br />
                            </section>
                        </div>
                    </div>
                </div>
            </div>

            {/* Edit Academic details Modal */}
            <div className="modal fade" id="editAcademicModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title fs-5" id="exampleModalLabel">Edit Academic Details</h2>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <label className="form-label">Father's Name</label>
                            <input type="text" name="fathersName" className="form-control" value={fathersName} onChange={(e) => setFathersName(e.target.value)} />
                            <br />
                            <label className="form-label">Mother's Name</label>
                            <input type="text" name="mothersName" className="form-control" value={mothersName} onChange={(e) => setMothersName(e.target.value)} />
                            <br />
                            <label className="form-label">Phone No</label>
                            <input type="text" name="phoneNo" className="form-control" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} />
                            <br />
                            <label className="form-label">Course</label>
                            <select name="Course" className="form-select" value={courseId} onChange={(e) => setCourseId(e.target.value)}>
                                <option value="">select a course</option>
                                {
                                    courses.map((c) => {
                                        return <option value={c._id}>{c.code}</option>
                                    })
                                }
                            </select>
                            <br />
                            <label className="form-label">Section</label>
                            <select name="Section" className="form-select" value={sectionId} onChange={(e) => setSectionId(e.target.value)}>
                                <option value="">select a section</option>
                                {
                                    sections.map((sec) => {
                                        let myCourse = courses.find((c) => c._id === courseId);

                                        if (courseId !== "" && myCourse._id === sec.courseId)
                                            return <option value={sec._id}>{myCourse.code}-{sec.sem} sem-{sec.name} section</option>
                                    })
                                }
                            </select>
                            <br />
                            <label className="form-label">Joining Year/Batch (yyyy)</label>
                            <input type="number" name="joiningDate" className="form-control" value={joiningDate} onChange={(e) => setJoiningDate(e.target.value)} />
                            <br />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={updateHandler} type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <section className=""><br /><br /><br /><br /><br /><br /><br /><br /> </section>
        </>
    }</>
    );
}
export default StudentProfile;