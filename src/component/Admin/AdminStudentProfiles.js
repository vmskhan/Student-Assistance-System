import axios from "axios";
import { useEffect, useState } from "react";

const AdminStudentProfiles=()=>{
const [studentData,setStudentData]=useState([{}]);
const [searchTerm,setSearchTerm]=useState('');

    useEffect(()=>{
        getStudentProfiles();
    },[])
    
    const getStudentProfiles=async()=>{
        axios.get('/api/admin/getStudents')
    .then((res)=>res.data)
    .then((data)=>{
      console.log(data);
      setStudentData(data.data);
    });
    }
    
    const updateStudentProfile=async(accId,newStatus)=>{
        axios.put('/api/admin/updateAccStatus',{'accId':accId,'status':newStatus})
    .then((res)=>res.data)
    .then((data)=>{
      console.log(data);
      //setStudentData(data.data);
      getStudentProfiles();
    });
    }
    
    const deleteStudentProfile=async(accId)=>{
        axios.delete('/api/admin/deleteProfile/'+accId)
    .then((res)=>res.data)
    .then((data)=>{
      console.log(data);
      getStudentProfiles();
      //setStudentData(data.data);
    });
    }

    return(
    <div>
        <div className="container">
        <h1 className="text-center">Student profiles</h1>
        <div className="row m-5">
                <div className="col-5 mx-auto">
                <div className="input-group">
                        <input type="search" onChange={(e)=>setSearchTerm(e.target.value)} placeholder="search student id" id="form1" class="form-control" />
                        <button type="button" class="btn btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
                    </button>
                </div>
                </div>
            </div>

            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">S.No.</th>
                    <th scope="col">Roll No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email Id</th>
                    <th scope="col">Acc. Status</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    {studentData && studentData.map((student,index)=>{
                        if(searchTerm==='' || student.id.includes(searchTerm))
                        return(
                    <tr>
                        <th scope="row">{index+1}</th>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td>{student.status}</td>
                        <td>
                            {student.status==='active'?
                            (<button className="btn btn-warning" onClick={(e)=>updateStudentProfile(student._id,'inactive')}>disable</button>)
                            :(<button className="btn btn-success" onClick={(e)=>updateStudentProfile(student._id,'active')}>enable</button>)
                            }
                            <button className="btn btn-danger ms-1" onClick={(e)=>deleteStudentProfile(student._id)}>delete</button>
                            
                        </td>
                    </tr>
                    );
                })
                }
                </tbody>
                </table>

        </div>
    </div>
    );
}
export default AdminStudentProfiles;