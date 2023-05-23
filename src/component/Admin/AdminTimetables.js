import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFacultyAccounts, getFacultyProfiles } from "../../store/AdminActions/faculty-actions";
import { getAdminCourses } from "../../store/AdminActions/course-actions";
import { getAdminDepartments } from "../../store/AdminActions/department-actions";
import { getAdminSubjects } from "../../store/AdminActions/subject-actions";
import { getAdminSections } from "../../store/AdminActions/section-actions";
import { createTimeTable, getAdminTimeTableWithSection, updateTimeTable } from "../../store/AdminActions/timeTable-actions";
import _ from "lodash";
const AdminTimetables = () => {

    const departments = useSelector(state => state.admin.departments);
    const sections = useSelector(state => state.admin.sections);
    const courses = useSelector(state => state.admin.courses);
    const subjects = useSelector(state => state.admin.subjects);
    const facultyList = useSelector(state => state.admin.facultyAccounts);
    const facultyProfiles = useSelector(state => state.admin.facultyProfiles);
    const timeTable = useSelector(state => state.admin.timeTable);
    const dispatch = useDispatch();

    // period variables
    const [fid, setFid] = useState("");
    const [currentDay, setCurrentDay] = useState("");
    const [periodNo, setPeriodNo] = useState(0);
    // time table variables
    const [course, setCourse] = useState("");
    const [section, setSection] = useState("");

    // const [classIncharge,setClassIncharge]=useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [academicYear, setAcademicYear] = useState("2023-2024");
    const [subId, setSubId] = useState("");
    const [issuedFor, setIssuedFor] = useState("");

    // useEffect(()=>{
    // console.log(facultyProfiles);
    // },[facultyProfiles]);

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

    const [timeTables, setTimeTables] = useState({});

    useEffect(() => {
        dispatch(getFacultyAccounts());
        dispatch(getFacultyProfiles());
        dispatch(getAdminCourses());
        dispatch(getAdminDepartments());
        dispatch(getAdminSubjects())
        dispatch(getAdminSections());
    }, [])

    const addTimeTable = () => {
        let data = {
            courseId: course,
            classIncharge: fid,
            sectionId: section,
            academicYear: academicYear,
            phoneNo: facultyProfiles.find((f) => f.facultyId === fid).phoneNo,
            periods: {},
            fids: [fid],
            sids: [],
        }
        console.log(data);
        dispatch(createTimeTable(data));
    }
    const updateTimeTableInfo = () => {
        let data = _.cloneDeep(timeTable);
        data.periods = timeTables.periods;
        data.fids = timeTables.fids;
        data.sids = timeTables.sids;
        console.log(data);
        dispatch(updateTimeTable(data));
    }

    const retrieveTimeTable = () => {
        dispatch(getAdminTimeTableWithSection(section));
    }
    useEffect(() => {
        setTimeTables(timeTable);
    }, [timeTable])
    const addInitializer = (data) => {
        setCurrentDay(data.currentDay);
        setPeriodNo(data.periodNo);

        if (facultyProfiles.some((f) => f.facultyId == data.facultyId))
            setFid(data.facultyId);
        setCourse(data.course);
        // console.log(facultyProfiles.some((f)=>f.facultyId==data.facultyId));
        // console.log(facultyProfiles);
        // console.log(data);
    }

    const periodChangeHandler = () => {
        let temp = _.cloneDeep(timeTables);
        let tempPeriod = {};
        tempPeriod.periodNo = periodNo;
        tempPeriod.teacherId = fid;
        tempPeriod.teacherName = facultyList.find((fac) => fac._id === fid).name;
        tempPeriod.subjectId = subId;
        tempPeriod.subjectName = subjects.find((sub) => sub._id === subId).name;

        if (!('sids' in temp))
            temp.sids = [];
        if (!temp.sids.some(k => k === subId))
            temp.sids = [...temp.sids, subId];

        if (!('fids' in temp))
            temp.fids = [];
        if (!temp.fids.some(k => k === fid))
            temp.fids = [...temp.fids, fid];

        if (!('periods' in temp))
            temp.periods = {};

        if (currentDay in temp.periods) {
            // console.log(temp);

            let index = temp.periods[currentDay].findIndex((period) => period.periodNo === periodNo)
            // console.log(index);
            if (index === -1)
                temp.periods[currentDay] = [...temp.periods[currentDay], tempPeriod];
            else
                temp.periods[currentDay][index] = tempPeriod
        }
        else {
            temp.periods[currentDay] = [];
            temp.periods[currentDay].push(tempPeriod);
        }
        setTimeTables(temp);
    }

    const removePeriodHandler = () => {
        let temp = _.cloneDeep(timeTables);
        if (currentDay in temp.periods) {
            let index = temp.periods[currentDay].findIndex((period) => period.periodNo === periodNo)
            if (index !== -1) {
                let tid = temp.periods[currentDay][index].teacherId;
                let count = 0;
                if (temp.classIncharge !== tid)
                    for (let day in temp.periods) {
                        // console.log(day);

                        count += temp.periods[day].filter((period) => period.teacherId === tid).length;
                        // console.log(count)
                        if (count === 2)
                            break;
                    }
                if (count === 1 && 'fids' in temp)
                    temp.fids.splice(temp.fids.findIndex((a) => a === tid), 1);
                // console.log(temp.periods[currentDay]);

                let sid = temp.periods[currentDay][index].subjectId;
                let subjectCount = 0;
                for (let day in temp.periods) {
                    // console.log(day);

                    subjectCount += temp.periods[day].filter((period) => period.subjectId === sid).length;
                    // console.log(subjectCount)
                    if (subjectCount === 2)
                        break;
                }
                if (subjectCount === 1 && 'sids' in temp)
                    temp.sids.splice(temp.sids.findIndex((a) => a === sid), 1);


                temp.periods[currentDay].splice(parseInt(index), 1);


            }

        }
        setTimeTables(temp);
        // console.log(temp)
    }

    return (
        <>
            {facultyList && courses && facultyProfiles && sections && subjects && timeTable &&
                <div>
                    <section className="d-flex justify-content-center align-items-center bg-secondary">
                        <div className="">
                            <div className="h1 fw-bolder fs-1 text-center my-5">Time Tables</div>
                        </div>
                    </section>
                    <br />
                    <div className="text-end">
                        <button className="btn btn-outline-success m-2" data-bs-toggle="modal" data-bs-target="#addTimeTableModal"><i className="bi bi-plus-lg"></i> Add TimeTable</button>
                    </div>
                    <br />

                    <div className="container">
                        <label className="form-label">Course</label>
                        <select className="form-select" value={course} onChange={(e) => setCourse(e.target.value)} >
                            <option value=''>Select Course</option>
                            {courses.map((course) => {
                                return (
                                    <option value={course._id}>{course.code}</option>
                                )
                            })

                            }
                        </select>

                        <label className="form-label">Section</label>
                        <select className="form-select" type="text" value={section} onChange={(e) => setSection(e.target.value)}>
                            <option value=''>Select Section</option>
                            {sections.filter((sec) => sec.courseId === course)
                                .map((sec) => {
                                    return (
                                        <option value={sec._id}>{sec.sem} sem-{sec.name} section</option>
                                    )
                                })}
                        </select>
                        <div className="text-end m-2">
                            <button className="btn btn-primary" onClick={retrieveTimeTable}>Get TimeTable</button>
                        </div>
                    </div>


                    <div className="container">
                        <div className="timetable-img text-center">
                            <img src="img/content/timetable.png" alt="" />
                        </div>
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
                                        return (
                                            <tr>
                                                <td className="align-middle text-uppercase fw-bold">{day}</td>
                                                {periods.map((period) => {
                                                    let periodData = { periodNo: period, currentDay: day, facultyId: "", course: course };
                                                    if ('periods' in timeTables && day in timeTables.periods) {

                                                        let periodExists = timeTables.periods[day].find((ele) => ele.periodNo === period);
                                                        if (periodExists) {
                                                            periodData.facultyId = periodExists.teacherId;
                                                            return (
                                                                <td>
                                                                    <button className="btn" onClick={() => addInitializer(periodData)} data-bs-toggle="modal" data-bs-target="#addPeriodModal">
                                                                        <span className="btn bg-primary padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">{periodExists.subjectName}</span>
                                                                        <div className="font-size13 text-light-gray">{periodExists.teacherName}</div>
                                                                        {/* {console.log(periodData.facultyId)} */}
                                                                        {(!facultyProfiles.some((f) => f.facultyId == periodData.facultyId)) &&
                                                                            <div className="font-size13 text-danger">Fac. Account Deleted</div>}
                                                                    </button>
                                                                </td>
                                                            );
                                                        }
                                                    }
                                                    return (
                                                        <td className="bg-light">
                                                            <button className="btn" onClick={() => addInitializer(periodData)} data-bs-toggle="modal" data-bs-target="#addPeriodModal">
                                                                -
                                                            </button>
                                                        </td>
                                                    );
                                                })}
                                            </tr>
                                        )
                                    })}

                                </tbody>
                            </table>
                            <div className="text-end m-2">
                                <button className="btn btn-success" onClick={updateTimeTableInfo}>Save Changes</button>
                            </div>
                        </div>
                    </div>
                    <section className=""><br/><br/><br/><br/><br/><br/><br/><br/> </section>
                    {/* <!--Add TimeTable Modal --> */}
                    <div className="modal fade" id="addTimeTableModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h2 className="modal-title fs-5" id="exampleModalLabel">Add Time Table</h2>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">

                                    <label className="form-label">Course</label>
                                    <select className="form-select" value={course} onChange={(e) => setCourse(e.target.value)} >
                                        <option value=''>Select Course</option>
                                        {courses.map((course) => {
                                            return (
                                                <option value={course._id}>{course.code}</option>
                                            )
                                        })

                                        }
                                    </select>

                                    <label className="form-label">Section</label>
                                    <select className="form-select" type="text" value={section} onChange={(e) => setSection(e.target.value)}>
                                        <option value=''>Select Section</option>
                                        {sections.filter((sec) => sec.courseId === course)
                                            .map((sec) => {
                                                return (
                                                    <option value={sec._id}>{sec.sem} sem-{sec.name} section</option>
                                                )
                                            })}
                                    </select>

                                    <label className="form-label">Sem</label>
                                    <input className="form-control" type='number' value={section !== '' && sections.find((sec) => sec._id === section).sem} disabled />
                                    <label className="form-label">Year</label>
                                    <input className="form-control" type="number" value={section !== '' && sections.find((sec) => sec._id === section).year} disabled />

                                    <br />
                                    <label className="form-label">Class Incharge</label>
                                    <select className="form-select" value={fid} onChange={(e) => setFid(e.target.value)} >
                                        <option value=''>Select Faculty</option>
                                        {course !== '' && facultyList.map((fac) => {
                                            let deptId = courses.find((c) => c._id === course).deptId;
                                            let facList = facultyProfiles.filter((f) => f.deptId === deptId)
                                            //  console.log(facList);
                                            if (facList.some((f) => f.facultyId === fac._id))
                                                return (
                                                    <option value={fac._id}>{fac.name}</option>
                                                )
                                        })

                                        }
                                    </select>
                                    <label className="form-label">Phone No.</label>
                                    <input className="form-control" type="text" value={fid !== '' && facultyProfiles.find((f) => f.facultyId == fid).phoneNo} disabled />

                                    <label className="form-label">Academic Year</label>
                                    <input className="form-control" type="text" value={academicYear} disabled />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary" onClick={() => addTimeTable()}>Add</button>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* <!--Add Period Modal --> */}
                    <div className="modal fade" id="addPeriodModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h2 className="modal-title fs-5" id="exampleModalLabel">Add Period</h2>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <label className="form-label">Period No.</label>
                                    <select className="form-select" value={periodNo} onChange={(e) => setPeriodNo(e.target.value)} >
                                        <option value=''>Select Period No.</option>
                                        {periods.map((period) => {
                                            return (
                                                <option value={period}>{period}</option>
                                            )
                                        })

                                        }
                                    </select>
                                    <br />
                                    <label className="form-label">Day</label>
                                    <select className="form-select" value={currentDay} onChange={(e) => setCurrentDay(e.target.value)} >
                                        <option value=''>Select Day</option>
                                        {days.map((day) => {
                                            return (
                                                <option value={day}>{day}</option>
                                            )
                                        })

                                        }
                                    </select>
                                    <br />

                                    <label className="form-label">Subject</label>
                                    <select className="form-select" value={subId} onChange={(e) => setSubId(e.target.value)} >
                                        <option value=''>Select Subject</option>
                                        {subjects.filter((sub) => sub.courseId === course)
                                            .map((sub) => {
                                                return (
                                                    <option value={sub._id}>{sub.name}-{sub.code}</option>
                                                )
                                            })

                                        }
                                    </select>
                                    <br />

                                    <label className="form-label">Faculty</label>
                                    <select className="form-select" value={fid} onChange={(e) => setFid(e.target.value)} >
                                        <option value=''>Select Faculty</option>
                                        {course !== '' && facultyList.map((fac) => {
                                            let deptId = courses.find((c) => c._id === course).deptId;
                                            let facList = facultyProfiles.filter((f) => f.deptId === deptId)
                                            //  console.log(facList);
                                            if (facList.some((f) => f.facultyId === fac._id))
                                                return (
                                                    <option value={fac._id}>{fac.name}</option>
                                                )
                                        })

                                        }
                                    </select>

                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary" onClick={() => periodChangeHandler()}>Confirm changes</button>
                                    <button type="button" className="btn btn-danger" onClick={() => removePeriodHandler()}>Remove Period</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default AdminTimetables;