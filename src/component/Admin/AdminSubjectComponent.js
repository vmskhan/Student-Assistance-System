import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminDepartments } from "../../store/AdminActions/department-actions";
import { getAdminCourses } from "../../store/AdminActions/course-actions";
import { createSubject, deleteSubject, getAdminSubjects, updateSubject } from "../../store/AdminActions/subject-actions";


const AdminSubjectComponent=()=>{
    const [deptId,setDeptId]=useState("");
    const [courseId,setCourseId]=useState("");
    
    const [subId,setSubId]=useState("");
    const [subName,setSubName]=useState("");
    const [subCode,setSubCode]=useState("");
    const [credits,setCredits]=useState("");
    const [noOfSessions,setNoOfSessions]=useState(0);
    const [noOfHours,setNoOfHours]=useState(0);
    
    const departments=useSelector(state=>state.admin.departments);
    const courses=useSelector(state=>state.admin.courses);
    const subjects=useSelector(state=>state.admin.subjects);
    

    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getAdminDepartments());
        dispatch(getAdminCourses());    
        dispatch(getAdminSubjects());
    },[]);

    const addNewSubject=()=>{
        let data={
            name:subName,
            code:subCode,
            credits:credits,
            noOfSessions:noOfSessions,
            noOfHours:noOfHours,
            courseId:courseId,
            deptId:deptId
        }
        // console.log(data);
        dispatch(createSubject(data));    
    }

    const deleteSubjectWithId=(id)=>{
        dispatch(deleteSubject(id));
    }

    const editSubject=()=>{
        let data={
            subjectId:subId,
            name:subName,
            code:subCode,
            credits:credits,
            noOfSessions:noOfSessions,
            noOfHours:noOfHours,
            courseId:courseId,
            deptId:deptId
        }
        // console.log(data);
        dispatch(updateSubject(data));    
    }
    
    const editSubjectInitializer=(subject)=>{
        setSubId(subject._id);
        setSubName(subject.name);
        setSubCode(subject.code);
        setCredits(subject.credits);
        setNoOfSessions(subject.noOfSessions);
        setNoOfHours(subject.noOfHours);
        setCourseId(subject.courseId);
        setDeptId(subject.deptId);
    }

    const courseChangeHandler=(value)=>{
        setCourseId(value);
        setDeptId(courses.find((c)=>c._id===value).deptId);
    }

    return(<>
    {departments && courses && subjects &&
    <>
    <div className="row my-3">
                            <h4 className="col my-4">Subjects</h4>
                            <div className="row mb-3">
                            <p className="col">Subjects available,</p>
                            <button className="btn btn-success col-2 mx-3" data-bs-toggle="modal" data-bs-target="#addSubjectModal" ><i className="bi bi-plus-lg"></i> Add Subject</button>
                        </div>
                </div>
                
                <table className="table">
                <thead>
                    <tr>
                    <th scope="col">S.No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Subject code</th>
                    <th scope="col">Credits</th>
                    <th scope="col">Total Sessions</th>
                    <th scope="col">Total Hours</th>
                    <th scope="col">Course</th>
                    {/* <th scope="col">Department</th> */}
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {subjects.map((sub,index)=>{
              
                        return(
                    <tr>
                        <th scope="row">{index+1}</th>
                        <td>{sub.name}</td>
                        <td>{sub.code}</td>
                        <td>{sub.credits}</td>
                        <td>{sub.noOfSessions}</td>
                        <td>{sub.noOfHours}</td>
                        <td>{courses.find((c)=>c._id===sub.courseId).code}</td>
                        {/* <td>{departments.find((dept)=>dept._id===sub.deptId).code}</td> */}
                        <td>
                            <button className="btn btn-info" data-bs-target="#editSubjectModal" data-bs-toggle="modal" onClick={(e)=>editSubjectInitializer(sub)}>Edit</button>
                            <button className="btn btn-danger ms-1" onClick={()=>deleteSubjectWithId(sub._id)}>delete</button> 
                        </td>
                    </tr>
                    );
                })
                }
                </tbody>
                </table>

{/* Modals */}
{/* add subject modal */}
<div className="modal" id="addSubjectModal" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Add new Subject</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p>Enter details for new Subject</p>

                    <label className="form-label">Subject Name</label>
                    <input type="text" className="form-control" placeholder="Enter Subject name" onChange={(e)=>setSubName(e.target.value)} value={subName}/>
                    
                    <label className="form-label">Subject Code</label>
                    <input type="text" className="form-control" placeholder="Enter Subject Code" onChange={(e)=>setSubCode(e.target.value)} value={subCode}/>
                    
                    <label className="form-label">credits</label>
                    <input type="number" className="form-control" placeholder="Enter credits" onChange={(e)=>setCredits(e.target.value)} value={credits}/>
                    
                    <label className="form-label">No of Sessions</label>
                    <input type="number" className="form-control" placeholder="Enter no. of Sessions" onChange={(e)=>setNoOfSessions(e.target.value)} value={noOfSessions}/>

                    <label className="form-label">No of Hours</label>
                    <input type="number" className="form-control" placeholder="Enter no. of Hours" onChange={(e)=>setNoOfHours(e.target.value)} value={noOfHours}/>
                    
                    <label className="form-label">Course</label>
                    <select type="text" className="form-select" onChange={(e)=>courseChangeHandler(e.target.value)} value={courseId}>
                        <option>Select Course</option>
                        {courses.map((course)=>{
                            return(
                                <option value={course._id}>{course.code}</option>
                            );
                        })
                        }
                    </select>

                    <label className="form-label">Department</label>
                    <input type="text" className="form-control" value={deptId!=='' && departments.find((dept)=>dept._id===deptId).code} disabled/>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-success" onClick={addNewSubject}>Add</button>
                </div>
                </div>
            </div>
        </div>

{/* Edit subject modal */}
<div className="modal" id="editSubjectModal" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Edit Subject Details</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p>Edit details for Subject</p>

                    <label className="form-label">Subject Name</label>
                    <input type="text" className="form-control" placeholder="Enter Subject name" onChange={(e)=>setSubName(e.target.value)} value={subName}/>
                    
                    <label className="form-label">Subject Code</label>
                    <input type="text" className="form-control" placeholder="Enter Subject Code" onChange={(e)=>setSubCode(e.target.value)} value={subCode}/>
                    
                    <label className="form-label">credits</label>
                    <input type="number" className="form-control" placeholder="Enter credits" onChange={(e)=>setCredits(e.target.value)} value={credits}/>
                    
                    <label className="form-label">No of Sessions</label>
                    <input type="number" className="form-control" placeholder="Enter no. of Sessions" onChange={(e)=>setNoOfSessions(e.target.value)} value={noOfSessions}/>

                    <label className="form-label">No of Hours</label>
                    <input type="number" className="form-control" placeholder="Enter no. of Hours" onChange={(e)=>setNoOfHours(e.target.value)} value={noOfHours}/>
                    
                    <label className="form-label">Course</label>
                    <select type="text" className="form-select" onChange={(e)=>courseChangeHandler(e.target.value)} value={courseId}>
                        <option>Select Course</option>
                        {courses.map((course)=>{
                            return(
                                <option value={course._id}>{course.code}</option>
                            );
                        })
                        }
                    </select>

                    <label className="form-label">Department</label>
                    <input type="text" className="form-control" value={deptId!=='' && departments.find((dept)=>dept._id===deptId).code} disabled/>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-success" onClick={editSubject}>Save Changes</button>
                </div>
                </div>
            </div>
        </div>

    </>}
    </>)
}

export default AdminSubjectComponent;