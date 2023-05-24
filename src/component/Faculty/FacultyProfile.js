import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDepartmentsForFaculty, getFacultyProfile, getTimeTableForParticularFaculty, updateFacultyProfile } from "../../store/FacultyActions/faculty-actions";
import _ from "lodash";

const FacultyProfile = () => {
    const periods = ['1', '2', '3', '4', '5', '6'];
    const metaData = [
        {
            name: "row1",
            data: ['Periods', '1', '2', '3', '4', '5', '6']
        },
        {
            name: "row2",
            data: ['', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:45 PM', '2:45 PM'],
        },
    ]
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const baseUrl = process.env.REACT_APP_IMAGE_UPLOADS_BASE_URL;
    const userInfo = useSelector(state => state.auth.userInfo);
    const facultyProfile = useSelector(state => state.faculty.profile);
    const departments = useSelector(state => state.faculty.departments);
    const timeTable = useSelector(state => state.faculty.timeTable);
    const dispatch = useDispatch();

    const [deptId, setDeptId] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [joiningDate, setJoiningDate] = useState("");
    const [yearsOfExperience, setYearsOfExperience] = useState(0);

    const editInitializer = () => {
        setDeptId(facultyProfile.deptId);
        setJoiningDate(facultyProfile.joiningDate);
        setPhoneNo(facultyProfile.phoneNo);
        setYearsOfExperience(facultyProfile.yearsOfExperience);
    }

    const updateHandler = () => {
        let data = {
            facultyId: userInfo._id,
            deptId,
            joiningDate,
            phoneNo,
            yearsOfExperience,
        }
        console.log(data);
        dispatch(updateFacultyProfile(data));
    }

    // useEffect(()=>{
    // console.log(facultyProfile)
    // console.log(timeTable);
    // console.log(userInfo)
    // },[]);

    useEffect(() => {
        dispatch(getFacultyProfile(userInfo._id));
        dispatch(getTimeTableForParticularFaculty(userInfo._id))
        dispatch(getDepartmentsForFaculty())

    }, [])

    // useEffect(()=>{
    //     if(!(_.isEmpty(facultyProfile)) && facultyProfile.deptId!==null)
    //     dispatch(getCoursesForFaculty(facultyProfile.deptId));
    // },[facultyProfile])

    return (
        <>
            {!(_.isEmpty(facultyProfile)) && departments.length > 0 && (!_.isEmpty(timeTable)) && userInfo &&
                <>

                    <div className="container-fluid">
                        <div className="card m-5 p-5">
                            <div className="card-body">
                                <div className="fs-2 fw-bolder text-center">
                                    FACULTY PROFILE
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
                                        <button onClick={editInitializer} className="btn btn-outline-success fs-5 fw-bold" data-bs-toggle="modal" data-bs-target="#editAccountModal">
                                            <i className="bi bi-pencil"></i> Edit
                                        </button>

                                    </div>
                                    <div className="fs-5">

                                        <label className="form-label">Faculty Id</label>
                                        <input type="text" name="facultyId" className="form-control" disabled value={userInfo.userId} />
                                        <br />
                                        <label className="form-label">Department</label>
                                        <input type="text" name="department" className="form-control" disabled value={facultyProfile.deptId !== null && departments.find((dept) => dept._id === facultyProfile.deptId).code} />
                                        <br />
                                        <label className="form-label">Joining Date</label>
                                        <input type="date" name="joiningDate" className="form-control" disabled value={facultyProfile.joiningDate} />
                                        <br />
                                        <label className="form-label">Phone No</label>
                                        <input type="text" name="Phone No" className="form-control" disabled value={facultyProfile.phoneNo} />
                                        <br />
                                        <label className="form-label">Years of Experience</label>
                                        <input type="number" name="yearsOfExperience" className="form-control" disabled value={facultyProfile.yearsOfExperience} />
                                        <br />
                                        <label className="form-label">Classes and subjects Assigned</label>
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Subject</th>
                                                    <th scope="col">Class</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {timeTable.subjectsAssigned.map((sub, index) => {
                                                    return (
                                                        <tr>
                                                            <th scope="row">{index + 1}</th>
                                                            <td>{sub.subjectName}</td>
                                                            <td>{sub.sectionName}</td>
                                                        </tr>
                                                    )
                                                })}

                                            </tbody>
                                        </table>
                                        <br />
                                        <div className="table table-responsive">
                                            <table className="table table-bordered text-center">
                                                <thead>
                                                    <tr className="bg-light-gray">
                                                        {metaData[0].data.map((element) => {
                                                            return (<th className="bg-primary text-uppercase text-light">{element}
                                                            </th>);
                                                        })
                                                        }
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        {metaData[1].data.map((element) => {
                                                            return (
                                                                <td className="align-middle fw-bold">{element}</td>
                                                            )
                                                        })}
                                                    </tr>
                                                    {days.map((day) => {

                                                        // console.log(myCourse);
                                                        return (
                                                            <tr>
                                                                <td className="align-middle text-uppercase fw-bold">{day}</td>
                                                                {periods.map((period) => {
                                                                    if ('periods' in timeTable && day in timeTable.periods) {

                                                                        let periodExists = timeTable.periods[day].find((ele) => ele.periodNo === period);
                                                                        if (periodExists) {
                                                                            return (
                                                                                <td>
                                                                                    <span className="btn bg-primary padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">{periodExists.subjectName}</span>
                                                                                    {/* <div className="font-size13 text-light-gray">{periodExists.teacherName}</div> */}
                                                                                    <div className="font-size13 text-light-gray">{periodExists.sectionName}</div>
                                                                                </td>
                                                                            );
                                                                        }
                                                                    }
                                                                    return (
                                                                        <td className="bg-light">
                                                                            -
                                                                        </td>
                                                                    );
                                                                })}
                                                            </tr>
                                                        )
                                                    })}

                                                </tbody>
                                            </table>
                                        </div>
                                        <br />
                                    </div>
                                    <br />
                                </section>
                            </div>
                        </div>
                    </div>



                    <div className="modal fade" id="editAccountModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Account Details</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <label className="form-label">Department</label>
                                    <select name="Department" className="form-select" value={deptId} onChange={(e) => setDeptId(e.target.value)}>
                                        <option>select a department</option>
                                        {
                                            departments.map((dept) => {
                                                return <option value={dept._id}>{dept.code}</option>
                                            })
                                        }
                                    </select>
                                    <br />
                                    <label className="form-label">Joining Date</label>
                                    <input type="date" name="joiningDate" className="form-control" value={joiningDate} onChange={(e) => setJoiningDate(e.target.value)} />
                                    <br />
                                    <label className="form-label">Phone No</label>
                                    <input type="text" name="phoneNo" className="form-control" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} />
                                    <br />
                                    <label className="form-label">Years of Experience</label>
                                    <input type="number" name="yearsOfExperience" className="form-control" value={yearsOfExperience} onChange={(e) => setYearsOfExperience(e.target.value)} />
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
            }
        </>
    );
}
export default FacultyProfile;