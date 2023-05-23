import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getNotesForStudent } from '../../store/student-actions';



export const StudentNotes = () => {
    const baseUrl=process.env.REACT_APP_IMAGE_UPLOADS_BASE_URL;
    const notes=useSelector(state=>state.student.notes);
    const dispatch=useDispatch();
    const [searchValue,setSearchValue]=useState("");
    useEffect(()=>{
        dispatch(getNotesForStudent());
    },[])
        useEffect(()=>{
            console.log(notes)
        },[notes]);
    return (
        <div className='Notes'>
             <section className="d-flex justify-content-center align-items-center bg-warning">
            <div className="">
            <div className="fw-bolder fs-1 text-center my-5">Notes</div>
            </div>
            
          </section>
            <div>
                {/* <h1 className='text-center mb-5'>NOTES</h1> */}
            <div className="row my-5">
                <div className="col-5 mx-auto">
                <div className="input-group">
                        <input type="search" placeholder="search notes" id="form1" className="form-control" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
                        <button type="button" className="btn btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
                    </button>
                </div>
                </div>
            </div>
                    <div className="row">
                        {
                            notes.map((note)=>{
                                if(note.title.includes(searchValue) || searchValue==='')
                                return(                        
                                <div className="col-5 mx-auto">
                                <div className="card">
                                <div className='card-header d-flex justify-content-between'>
                                        <h5 className="card-title">{note.title}</h5>
                                    </div>
                                <div className="card-body">
                                        <p>
                                            <span className='fw-bold'>Subject:</span> {note.subjectName}
                                        </p>
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
        </div>
    )
}

export default StudentNotes;