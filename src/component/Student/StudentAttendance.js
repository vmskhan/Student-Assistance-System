import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getAttendanceForStudent, getMarksForStudent, getProfileForStudent } from "../../store/student-actions";
import _ from 'lodash'

const StudentAttendance = () => {
    const userInfo = useSelector(state => state.auth.userInfo);
    const profile = useSelector(state => state.student.profile);
    const attendance = useSelector(state => state.student.attendance);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfileForStudent(userInfo._id));
    }, [])

    useEffect(() => {
        console.log(profile)
        if (!(_.isEmpty(profile)) && profile.sectionId !== null)
            dispatch(getAttendanceForStudent({ 'sectionId': profile.sectionId, 'studentId': profile.studentId }));
    }, [profile]);

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



    return (<>
        {attendance &&
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
                                    <th scope="col">Days Present</th>
                                    <th scope="col">Total no of days</th>
                                    <th scope="col">Performance</th>
                                    <th scope="col">Percentage</th>
                                    {/* <th scope="col">Actions</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {attendance?.subjects?.map((sub, index) => {

                                    // let sub=timeTable.subjectsAssigned.find((s)=>s.subjectId===se)
                                    let grade = getGradeForPercentage(sub.percentage);
                                    return (
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{sub.subjectName}</td>
                                            <td>{sub.daysPresent}</td>
                                            <td>{sub.totalDays}</td>
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
export default StudentAttendance;