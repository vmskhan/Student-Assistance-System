import proxyAxios from "../../axiosMiddleware";
import { useEffect, useState } from "react";
import { deleteStudentAccount, getStudentAccounts, updateStudentAccount } from "../../store/AdminActions/student-actions";
import { useDispatch, useSelector } from "react-redux";

const AdminStudentAccounts=()=>{
    const baseUrl=process.env.REACT_APP_IMAGE_UPLOADS_BASE_URL;
const [searchTerm,setSearchTerm]=useState('');
const studentData=useSelector(state=>state.admin.studentAccounts);

const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getStudentAccounts());
    },[])
    
    const updateStudentAccountStatus=async(accId,newStatus)=>{
        dispatch(updateStudentAccount(accId,newStatus));
    }
    
    const removeStudentAccount=async(accId)=>{
        dispatch(deleteStudentAccount(accId));
    }

    return(
    <div>
        <div className="container">
        <h1 className="text-center">Student profiles</h1>
        <div className="row m-5">
                <div className="col-5 mx-auto">
                <div className="input-group">
                        <input type="search" onChange={(e)=>setSearchTerm(e.target.value)} placeholder="search student id" id="form1" className="form-control" />
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
                    <th scope="col">Pic</th>
                    <th scope="col">Roll No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email Id</th>
                    <th scope="col">Acc. Status</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {studentData && studentData.map((student,index)=>{
                        if(searchTerm==='' || student.userId.includes(searchTerm))
                        return(
                    <tr>
                        <td scope="row">{index+1}</td>
                        <td>
                        {student.pic!=='Nil'?( 
                            <img src={baseUrl+student.pic} className="rounded-circle"  height="80vh" alt="profile pic"/>
                        ):(
                            <img
                        src="/assets/images/logo1.png"
                        className="rounded-circle"
                        height="80vh"
                        alt="Black and White Portrait of a Man"
                        loading="lazy"
                      />
                        )
                        }
                        </td>
                        <td>{student.userId}</td>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td>{student.status}</td>
                        <td>
                            {student.status==='active'?
                            (<button className="btn btn-warning" onClick={(e)=>updateStudentAccountStatus(student._id,'inactive')}>disable</button>)
                            :(<button className="btn btn-success" onClick={(e)=>updateStudentAccountStatus(student._id,'active')}>enable</button>)
                            }
                            <button className="btn btn-danger ms-1" onClick={(e)=>removeStudentAccount(student._id)}>delete</button>
                            
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
export default AdminStudentAccounts;