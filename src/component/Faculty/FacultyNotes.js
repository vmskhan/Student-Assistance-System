import React, { useState } from 'react'



export const FacultyNotes = () => {
    const [notes,setNotes]=useState([
        {
            title:"Data Science using R",
            description:"UNITS:1-5",
            fileLink:"",
            createdBy:"sridevi maam",
        },
        {
            title:"Distributed System",
            description:"UNIT:1-5",
            fileLink:"",
            createdBy:"maniza maam",
        }
    ]);
    return (
        <div className='Notes'>
            <div>
                <h1 className='text-center mb-5'>NOTES</h1>
            <div className="row mb-5">
                <div className="col-5 mx-auto">
                <div className="input-group">
                        <input type="search" placeholder="search notes" id="form1" class="form-control" />
                        <button type="button" class="btn btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
                    </button>
                </div>
                </div>
            </div>
                    <div className="row">
                        {
                            notes.map((note)=>{
                                return(                        
                                <div className="col-5 mx-auto">
                                <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{note.title}</h5>
                                    <p className="card-text">
                                        {note.description}
                                        <br/>
                                        Created by: {note.createdBy}
                                        </p>
                                    <a href={note.fileLink} className="btn btn-primary">OPEN</a>
                                </div>
                            </div>
                        </div>
                        );
                    })

                     }
                    </div>               
            </div>
        </div>
    )
}

export default FacultyNotes;