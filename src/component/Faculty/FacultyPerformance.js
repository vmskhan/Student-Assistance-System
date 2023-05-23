import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedSection,getCoursesForFaculty, getFacultyProfile, getSectionsForFaculty, getStudentAccountsForFaculty, getStudentProfilesForFaculty, getTimeTableForParticularFaculty, updateParticularStudentMarks } from "../../store/FacultyActions/faculty-actions";
import _, { isUndefined } from "lodash";

const FacultyPerformance = () => {
    const baseUrl = process.env.REACT_APP_IMAGE_UPLOADS_BASE_URL;
    const facultyProfile = useSelector(state => state.faculty.profile);
    const timeTable = useSelector(state => state.faculty.timeTable);
    const userInfo = useSelector(state => state.auth.userInfo);
    const studentAccounts = useSelector(state => state.faculty.studentAccounts);
    const selectedSection=useSelector(state=>state.faculty.selectedSection);
    // const courses=useSelector(state=>state.faculty.courses);
    const dispatch = useDispatch();

    const [selectedSid,setSelectedSid]=useState("");
    const [tempMarks,setTempMarks]=useState({});
    const [sectionId, setSectionId] = useState("");
    const [subjectId, setSubjectId] = useState("");
    const [subjectName, setSubjectName] = useState("");

    useEffect(() => {
        dispatch(getFacultyProfile(userInfo._id));
        dispatch(getTimeTableForParticularFaculty(userInfo._id));
        dispatch(getSectionsForFaculty());
    }, [])

    useEffect(() => {
        if (!(_.isEmpty(facultyProfile)) && facultyProfile.deptId !== null)
            dispatch(getCoursesForFaculty(facultyProfile.deptId));
    }, [facultyProfile]);

    const subjectChangeHandler = (value) => {
        // console.log(value)
        setSubjectId(value);
        let currentSubject = timeTable.subjectsAssigned.filter((sub) => sub.subjectId == value);
        // console.log(currentSubject)
        if(currentSubject.length>0)
        {
        setSectionId(currentSubject[0].sectionId);
        setSubjectName(currentSubject[0].subjectName);
        // console.log('yes reaching')
        // console.log(value)
            if (value !== "nil")
            {
                dispatch(getStudentAccountsForFaculty(currentSubject[0].sectionId));
                dispatch(getSelectedSection(currentSubject[0].sectionId));
            }
        }
    }

    const getGradeForPercentage=(percentage)=>{
        if(percentage=='Nil')
            return 'N/A'
        else if(percentage>=89)
            return 'Excellent'
        else if(percentage>=79)
            return 'Good'
        else if(percentage>=69)
            return 'Fair'
        else if(percentage>=59)
            return 'ok'
        else
            return 'Weak'
    }

    const initializeModalData=(sid)=>{
        setSelectedSid(sid);
        // console.log(sid);
        let stud=studentAccounts.filter((s)=>s._id===sid)[0];
        // console.log(stud);
        let userId=stud.userId;
        let name=stud.name;
        let smarks=selectedSection?.marks?.filter((s)=>s.studentId===sid)?.[0]?.subjects?.filter((sub)=>sub.subjectId===subjectId)?.[0]
        
        // console.log(selectedSection?.marks?.filter((s)=>s.studentId===sid))
        // console.log(name)
        // console.log(smarks)
        if(_.isUndefined(smarks))
            smarks={
                name:name,
                studentId:sid,
                userId:userId,
                subjectName:subjectName,
                subjectId:subjectId,
                percentage:0,
                firstInternal:0,
                secondInternal:0,
                assignments:0,
            }
            else
            {
                smarks={...smarks,name:name};
            }
            
            // console.log(smarks)
        setTempMarks(smarks);
    }

    const marksChangeHandler=(e)=>{
        let t=_.clone(tempMarks);
        t[e.target.name]=e.target.value;
        let n=0;
        let totalMarks=0;
        if(t.firstInternal>0)
        {
            totalMarks+=parseInt(t.firstInternal)
            n++;
        }
        if(t.secondInternal>0)
        {
            totalMarks+=parseInt(t.secondInternal)
            n++;
        }
        if(t.assignments>0)
        {
            totalMarks+=parseInt(t.assignments)
            n++;
        }
        if(n!==0)
            t.percentage=totalMarks/n;
        else
            t.percentage=0;
            // console.log(totalMarks)
        setTempMarks(t);
    }

    const updateStudentMarks=()=>{
        let data={
                studentId:tempMarks.studentId,
                userId:tempMarks.userId,
                subjectName:tempMarks.subjectName,
                subjectId:tempMarks.subjectId,
                percentage:tempMarks.percentage,
                firstInternal:tempMarks.firstInternal,
                secondInternal:tempMarks.secondInternal,
                assignments:tempMarks.assignments,
                sectionId:sectionId,
        }
        console.log(data)
        dispatch(updateParticularStudentMarks(data))
    }

    useEffect(() => {
        console.log('changed')
        
        console.log(studentAccounts);
    }, [ studentAccounts]);
    // useEffect(()=>{
    //     console.log(timeTable);
    // },[timeTable]);

    return (<>
        {(!(_.isEmpty(timeTable))) &&
            <>
                <section className="d-flex justify-content-center align-items-center " style={{ backgroundColor: "#66ff99" }}>
                    <div className="">
                        <div className="h1 fw-bolder fs-1 text-center my-5">Student Performance</div>
                    </div>
                </section>
                <div className="my-3">
                    <div className="mx-auto col-6">
                        <select type="text" className="form-select" value={subjectId} onChange={(e) => subjectChangeHandler(e.target.value)}>
                            <option value="nil">Select Subject</option>
                            {timeTable.subjectsAssigned.map((sub) => {

                                return (
                                    <option value={sub.subjectId}>{sub.subjectName}-{sub.sectionName}</option>
                                );
                            })

                            }
                        </select>
                    </div>
                </div>
                <div className="container vh-100">
                    <div className="d-flex justify-content-center">
                        <table class="table align-middle text-center">
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
                                {studentAccounts.map((myStud, index) => {
                                    
                                    // let sub=timeTable.subjectsAssigned.find((s)=>s.subjectId===se)
                                    let studPercentage=selectedSection?.marks?.filter((s)=>s.studentId===myStud._id)?.[0]?.subjects?.filter((sub)=>sub.subjectId===subjectId)?.[0]?.percentage || 'Nil';
                                    let grade=getGradeForPercentage(studPercentage);
                                    return (
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{myStud.userId}</td>
                                            <td>
                                                {myStud.pic === 'Nil' ? (<img
                                                    src="/assets/images/logo1.png"
                                                    className="rounded-circle"
                                                    height="65vh"
                                                    alt="Black and White Portrait of a Man"
                                                    loading="lazy"
                                                />) : (
                                                    <img src={baseUrl + myStud.pic} height="65vh" className="rounded-circle" alt="profile pic" />
                                                )}
                                            </td>
                                            <td>{myStud?.name}</td>
                                            <td>{subjectName}</td>
                                            <td>{studPercentage}</td>
                                            <td>{grade}</td>
                                            <td><button className="btn btn-success" onClick={()=>initializeModalData(myStud._id)} data-bs-toggle='modal' data-bs-target="#updateStudentMarksModal" >View</button></td>
                                        </tr>
                                    )
                                })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
                <section className=""><br/><br/><br/><br/><br/><br/><br/><br/> </section>

{/* MOdal */}
                
                <div class="modal fade" id="updateStudentMarksModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Student Performance Data</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    
                    <label>Name</label>
                    <input type="text" className="form-control" value={tempMarks?.name} disabled/>

                    <label>Subject</label>
                    <input type="text" className="form-control" value={subjectName} disabled/>

                    <label>Marks in First Internal</label>
                    <input type="number" className="form-control" name="firstInternal" value={tempMarks?.firstInternal} onChange={(e)=>marksChangeHandler(e)}/>

                    <label>Marks in Second Internal</label>
                    <input type="number" className="form-control" name="secondInternal" value={tempMarks?.secondInternal} onChange={(e)=>marksChangeHandler(e)}/>

                    <label>Marks in Assignments</label>
                    <input type="number" className="form-control" name="assignments" value={tempMarks?.assignments} onChange={(e)=>marksChangeHandler(e)}/>

                    <label>Overall Percentage</label>
                    <input type="number" className="form-control" name="percentage" value={tempMarks?.percentage} disabled/>

                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" onClick={()=>updateStudentMarks()}>Save changes</button>
                    </div>
                </div>
                </div>
                </div>

            </>
        }
    </>);
}
export default FacultyPerformance;