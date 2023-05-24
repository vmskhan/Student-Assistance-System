import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getMarksForStudent, getProfileForStudent } from "../../store/student-actions";
import _ from 'lodash'

const StudentPerformance = () => {
    // const [pythonMessage,setPythonMessage]=useState("");
    // const callPythonApi=()=>{
    //   axios.get("http://localhost:5000/test")
    //   .then((res)=>res.data)
    //   .then((data)=>{
    //     setPythonMessage(data);
    //   })
    // }  
    const baseUrl = process.env.REACT_APP_IMAGE_UPLOADS_BASE_URL;

    //   const timeTable = useSelector(state => state.faculty.timeTable);
    const userInfo = useSelector(state => state.auth.userInfo);
    // const courses=useSelector(state=>state.faculty.courses);
    const profile = useSelector(state => state.student.profile);
    const marks = useSelector(state => state.student.marks);
    const dispatch = useDispatch();

    const [selectedSid, setSelectedSid] = useState("");
    const [tempMarks, setTempMarks] = useState({});
    const [sectionId, setSectionId] = useState("");
    const [subjectId, setSubjectId] = useState("");
    const [subjectName, setSubjectName] = useState("");

    useEffect(() => {
        dispatch(getProfileForStudent(userInfo._id));
    }, [])

    useEffect(() => {
        console.log(profile)
        if (!(_.isEmpty(profile)) && profile.sectionId !== null)
            dispatch(getMarksForStudent({ 'sectionId': profile.sectionId, 'studentId': profile.studentId }));
    }, [profile]);

    //   const subjectChangeHandler = (value) => {
    //       // console.log(value)
    //       setSubjectId(value);
    //       let currentSubject = timeTable.subjectsAssigned.filter((sub) => sub.subjectId == value);
    //       // console.log(currentSubject)
    //       if(currentSubject.length>0)
    //       {
    //       setSectionId(currentSubject[0].sectionId);
    //       setSubjectName(currentSubject[0].subjectName);
    //       // console.log('yes reaching')
    //       // console.log(value)
    //           if (value !== "nil")
    //           {
    //               dispatch(getStudentAccountsForFaculty(currentSubject[0].sectionId));
    //               dispatch(getSelectedSection(currentSubject[0].sectionId));
    //           }
    //       }
    //   }

    const getGradeForPercentage = (percentage) => {
        if (percentage == 'Nil')
            return 'N/A'
        else if (percentage >= 89)
            return 'Excellent'
        else if (percentage >= 79)
            return 'Good'
        else if (percentage >= 69)
            return 'Fair'
        else if (percentage >= 59)
            return 'ok'
        else
            return 'Weak'
    }



    //   useEffect(() => {
    //       console.log('changed')

    //       console.log(studentAccounts);
    //   }, [ studentAccounts]);
    // useEffect(()=>{
    //     console.log(timeTable);
    // },[timeTable]);

    return (<>
        {marks &&
            <>
                <section className="d-flex justify-content-center align-items-center " style={{ backgroundColor: "#66ff99" }}>
                    <div className="">
                        <div className="h1 fw-bolder fs-1 text-center my-5">Student Performance</div>
                    </div>
                </section>
                <div className="container vh-100">
                    <div className="d-flex justify-content-center">
                        <table class="table align-middle text-center">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Subject</th>
                                    <th scope="col">First Internal</th>
                                    <th scope="col">Second Internal</th>
                                    <th scope="col">Assignments</th>
                                    <th scope="col">Performance</th>
                                    <th scope="col">Percentage</th>
                                    {/* <th scope="col">Actions</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {marks?.subjects?.map((sub, index) => {

                                    // let sub=timeTable.subjectsAssigned.find((s)=>s.subjectId===se)
                                    let grade = getGradeForPercentage(sub.percentage);
                                    return (
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{sub.subjectName}</td>
                                            <td>{sub.firstInternal}</td>
                                            <td>{sub.secondInternal}</td>
                                            <td>{sub.assignments}</td>
                                            <td>{grade}</td>
                                            <td>{sub.percentage}</td>
                                            {/* <td>{studPercentage}</td> */}
                                            {/* <td>{grade}</td> */}
                                            {/* <td><button className="btn btn-success" onClick={()=>initializeModalData(myStud._id)} data-bs-toggle='modal' data-bs-target="#updateStudentMarksModal" >View</button></td> */}
                                        </tr>
                                    )
                                })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
                <section className=""><br /><br /><br /><br /><br /><br /><br /><br /> </section>

            </>
        }
    </>);
}
export default StudentPerformance;