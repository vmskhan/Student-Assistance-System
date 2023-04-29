import proxyAxios from "../../axiosMiddleware";
import { useEffect, useState } from "react";


const AdminFacultyProfiles=()=>{
    const [facultyData,setFacultyData]=useState([{}]);
const [searchTerm,setSearchTerm]=useState('');

    useEffect(()=>{
        getFacultyProfiles();
    },[])
    
    const getFacultyProfiles=async()=>{
        proxyAxios.get('/api/admin/getFaculty')
    .then((res)=>res.data)
    .then((data)=>{
      console.log(data);
      setFacultyData(data.data);
    });
    }
    
    const updateStudentProfile=async(accId,newStatus)=>{
        proxyAxios.put('/api/admin/updateAccStatus',{'accId':accId,'status':newStatus})
    .then((res)=>res.data)
    .then((data)=>{
      console.log(data);
      //setFacultyData(data.data);
      getFacultyProfiles();
    });
    }
    
    const deleteStudentProfile=async(accId)=>{
        proxyAxios.delete('/api/admin/deleteProfile/'+accId)
    .then((res)=>res.data)
    .then((data)=>{
      console.log(data);
      getFacultyProfiles();
      //setFacultyData(data.data);
    });
    }

    return(
    <div>
        <div className="container">
        <h1 className="text-center">Faculty profiles</h1>
        <div className="row m-5">
                <div className="col-5 mx-auto">
                <div className="input-group">
                        <input type="search" onChange={(e)=>setSearchTerm(e.target.value)} placeholder="search faculty id" id="form1" className="form-control" />
                        <button type="button" className="btn btn-primary">
                        <i class="bi bi-search"></i>
                    </button>
                </div>
                </div>
            </div>

            <table className="table">
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
                <tbody className="table-group-divider">
                    {facultyData && facultyData.map((student,index)=>{
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
export default AdminFacultyProfiles;