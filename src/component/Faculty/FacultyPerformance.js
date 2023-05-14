import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoursesForFaculty, getFacultyProfile, getSectionsForFaculty, getStudentAccountsForFaculty, getStudentProfilesForFaculty, getTimeTableForParticularFaculty } from "../../store/FacultyActions/faculty-actions";
import _ from "lodash";

const FacultyPerformance=()=>{
    const baseUrl=process.env.REACT_APP_IMAGE_UPLOADS_BASE_URL;
    const facultyProfile=useSelector(state=>state.faculty.profile);
    const timeTable=useSelector(state=>state.faculty.timeTable);
    const userInfo=useSelector(state=>state.auth.userInfo);
    const studentProfiles=useSelector(state=>state.faculty.studentProfiles);
    const studentAccounts=useSelector(state=>state.faculty.studentAccounts);
    // const sections=useSelector(state=>state.faculty.sections);
    // const courses=useSelector(state=>state.faculty.courses);
    const dispatch=useDispatch();

    const [sectionId,setSectionId]=useState("");


    useEffect(()=>{
        dispatch(getFacultyProfile(userInfo._id));
        dispatch(getTimeTableForParticularFaculty(userInfo._id));
        dispatch(getSectionsForFaculty());
        dispatch(getStudentAccountsForFaculty());
    },[])

    useEffect(()=>{
        if(!(_.isEmpty(facultyProfile)) && facultyProfile.deptId!==null)
            dispatch(getCoursesForFaculty(facultyProfile.deptId));
    },[facultyProfile]);

    const sectionChangeHandler=(value)=>{
        // console.log(value)
        setSectionId(value);
        if(value!=="nil")
            dispatch(getStudentProfilesForFaculty(value));
    }
    useEffect(()=>{
        console.log(studentProfiles);
        console.log(studentAccounts);
    },[studentProfiles,studentAccounts]);

    return(<>
    { (!(_.isEmpty(timeTable))) &&
    <>
        <section className="d-flex justify-content-center align-items-center bg-secondary">
                <div className="">
                    <div className="h1 fw-bolder fs-1 text-center my-5">Performance</div>
                </div>
            </section>
        <div className="my-3">
            <div className="mx-auto col-6">
                <select type="text" className="form-select" value={sectionId} onChange={(e)=>sectionChangeHandler(e.target.value)}>
                    <option value="nil">Select Subject</option>
                    {timeTable.subjectsAssigned.map((sub)=>{
                        
                        return(
                            <option value={sub.sectionId}>{sub.subjectName}-{sub.sectionName}</option>
                        );
                    })

                    }
                </select>
            </div>
        </div>
        <div className="container">
        <div className="d-flex justify-content-center">
            <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">RollNo</th>
                <th scope="col">Pic</th>
                <th scope="col">Name</th>
                <th scope="col">Subject</th>
                <th scope="col">Performance</th>
                <th scope="col">Percentage</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {studentProfiles.map((prof,index)=>{
                    let myStud={};
                    if(studentAccounts)
                        myStud=studentAccounts.find((s)=>s._id===prof.studentId);
                    // let sub=timeTable.subjectsAssigned.find((s)=>s.subjectId===se)
                    return(
                        <tr>
                            <th scope="row">{index+1}</th>
                            <td>{myStud.userId}</td>
                            <td>
                                {myStud.pic==='Nil'?(<img
                                    src="/assets/images/logo1.png"
                                    className="rounded-circle"
                                    height="65vh"
                                    alt="Black and White Portrait of a Man"
                                    loading="lazy"
                                    />):(
                                        <img src={baseUrl+myStud.pic} height="65vh" className="rounded-circle" alt="profile pic"/>
                                )}
                            </td>
                            <td>{myStud.name}</td>
                            {/* <td>{sub.subjectName}-{sub.sectionName}</td> */}
                            <td>Artificial Intelligence</td>
                            <td>Excellent</td>
                            <td>97.02%</td>
                            <td><button className="btn btn-success">View</button></td>
                        </tr>
                    )
                })
                }
                
            </tbody>
            </table>
        </div>
        </div>
    </>
    }
    </>);
}
export default FacultyPerformance;