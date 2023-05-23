import React, { useEffect, useState } from 'react'
import { deleteNotes, getNotes, sendNewNotes } from '../../store/FacultyActions/notes-actions';
import { useDispatch, useSelector } from 'react-redux';
import { getFacultyProfile, getSubjectsForFaculty } from '../../store/FacultyActions/faculty-actions';
import _ from 'lodash';


export const FacultyNotes = () => {
    const baseUrl=process.env.REACT_APP_IMAGE_UPLOADS_BASE_URL;
    const sems=[1,2,3,4,5,6,7,8];
    const facultyProfile=useSelector(state=>state.faculty.profile);
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const [subjectId,setSubjectId]=useState("");
    const [fileLink,setFileLink]=useState({data:''});
    const [semester,setSemester]=useState(1);
    const [year,setYear]=useState(1);
    const [author,setAuthor]=useState("");
    const notes=useSelector(state=>state.faculty.notes);
    const dispatch=useDispatch();
    const userInfo=useSelector(state=>state.auth.userInfo);
    const subjects=useSelector(state=>state.faculty.subjects);
useEffect(()=>{
    dispatch(getFacultyProfile(userInfo._id));
},[]);
useEffect(()=>{
    console.log(notes);
},[notes]);
useEffect(()=>{
    if(!(_.isEmpty(facultyProfile)))
    {
        dispatch(getSubjectsForFaculty(facultyProfile.deptId));
        dispatch(getNotes(facultyProfile.deptId));
    }
},[facultyProfile])

    const handleSemesterChange=(value)=>{
        setSemester(value);
        setYear(Math.ceil(value/2));
    }
    const addNewNotes=()=>{
        let data={
            title,
            description,
            author,
            createdBy:userInfo.name,
            semester,
            year,
            fileLink,
            subjectId,
            deptId:'',
        }
        if(!(_.isEmpty(facultyProfile)))
         data.deptId=facultyProfile.deptId;
    console.log(data);
    dispatch(sendNewNotes(data));
    }

const deleteHandler=(id)=>{
    dispatch(deleteNotes(id));
}
    return (
        <div className='Notes'>
            <div>
                <h1 className='text-center mb-5'>NOTES</h1>
            <div className="d-flex flex-row p-2 mb-5 justify-content-evenly">
                <div className='col-3'>

                </div>
                <div className="col-5 pe-5">
                    {/* <div className='row'> */}
                        <div className="input-group">
                                <input type="search" placeholder="search notes" id="form1" className="form-control" />
                                <button type="button" className="btn btn-primary">
                                <i className="bi bi-search"></i>
                            </button>
                        </div>
                    {/* </div> */}
                </div>
                <div className='col-2 text-end'>
                    {/* <!-- Button trigger modal --> */}
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newNotesModal">
                    <i className="bi bi-plus-lg"></i> Add Notes
                    </button>
                </div>
            </div>
                    <div className="row">
                        {notes.length===0 &&
                        <div className='text-center fs-5 text-muted'>No notes to display</div>}
                        {
                           notes.map((note)=>{
                            
                            return(                        
                                <div className="col-4 mx-auto">
                                <div className="card m-3">
                                    <div className='card-header d-flex justify-content-between'>
                                        <h5 className="card-title">{note.title}</h5>
                                        {note.createdBy===userInfo.name &&
                                        <button className="btn btn-danger"onClick={()=>deleteHandler(note._id)}><i className="bi bi-x-octagon"></i> Delete</button>
                                        }
                                    </div>
                                <div className="card-body">
                                        <p><span className='fw-bold'>Subject:</span> {note.subjectName}</p>
                                        <div className='d-flex justify-content-between'>
                                            <p className="card-text">
                                                <span className='fw-bold'>Author:</span> {note.author}
                                                <br/>
                                                <span className='fw-bold'>Created by:</span> {note.createdBy}
                                            </p>
                                            <p className="card-text">
                                                <span className='fw-bold'>Semester:</span> {note.semester}
                                                <br/>
                                                <span className='fw-bold'>Year:</span> {note.year}
                                            </p>
                                        </div>
                                        <span className='fw-bold'>Description:</span> {note.description}
                                        <br/>
                                        
                                        {/* Creation Date:{note.creationDate} */}
                                        
                                        <div className='text-end'>
                                             <a download href={baseUrl+note.fileLink} className="btn btn-primary"><i className="bi bi-box-arrow-down"></i> Download</a>
                                        </div>
                                </div>
                            </div>
                        </div>
                        );
                    })

                     }
                    </div>               
            </div>
            <section className=""><br/><br/><br/><br/><br/><br/><br/><br/> </section>

{/* <!-- Modal --> */}
<div className="modal fade" id="newNotesModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Add New Notes</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className='input-group mb-3'>
            <label className=' input-group-text'>Title</label>
            <input type='text' className="form-control" name='title' placeholder="Enter title" value={title} onChange={(e)=>setTitle(e.target.value)} />
        </div>
        <div className='input-group mb-3'>
            <label className=' input-group-text'>Description</label>
            <textarea className="form-control" name='description' placeholder="Enter Description" value={description} onChange={(e)=>setDescription(e.target.value)} />
        </div>
        <div className='input-group mb-3'>
            <label className=' input-group-text'>Author</label>
            <input type='text' className="form-control" name='author' placeholder="Enter Author Name" value={author} onChange={(e)=>setAuthor(e.target.value)} />
        </div>
        
        <div className='input-group mb-3'>
            <label className=' input-group-text'>Subject</label>
            <select type='text' className="form-select" name='subject' placeholder="select subject" value={subjectId} onChange={(e)=>setSubjectId(e.target.value)} >
            <option selected>Select Subject</option>
                { 
                subjects.map(sub=>{
                return <option value={sub._id}>{sub.name}-{sub.code}</option>
                })
                }
            </select>
        </div>

        <div className='input-group mb-3'>
            <label className=' input-group-text'>Semester</label>
            <select type='text' className="form-select" name='semester' placeholder="select semester" value={semester} onChange={(e)=>handleSemesterChange(e.target.value)} >
            <option selected>Select Semester</option>
                { 
                sems.map(ele=>{
                return <option value={ele}>{ele}</option>
                })
                }
            </select>
        </div>
        <div className='input-group mb-3'>
            <label className='input-group-text'>Year</label>
            <input type='text' disabled className="form-control" name='year' value={year} />
        </div>
        <div className='mb-3'>
            <label className='form-label'>File</label>
            <input type='file' className="form-control" name='notesFile' onChange={(e)=>setFileLink({data:e.target.files[0]})} />
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={addNewNotes}>Add</button>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default FacultyNotes;