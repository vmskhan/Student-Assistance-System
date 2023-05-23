
import { useEffect, useState } from "react";
import { getFacultyAccounts, deleteFacultyAccount, updateFacultyAccount } from "../../store/AdminActions/faculty-actions";
import { useDispatch, useSelector } from "react-redux";


const AdminFacultyAccounts = () => {
    const baseUrl = process.env.REACT_APP_IMAGE_UPLOADS_BASE_URL;
    const facultyData = useSelector(state => state.admin.facultyAccounts);
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFacultyAccounts());
    }, [])



    const updateAcc = async (accId, newStatus) => {
        let data = { 'accId': accId, 'status': newStatus }
        dispatch(updateFacultyAccount(data));
    }

    const deleteAcc = async (accId) => {
        dispatch(deleteFacultyAccount(accId));
    }

    return (
        <div>
            <div className="container">
                <h1 className="text-center">Faculty profiles</h1>
                <div className="row m-5">
                    <div className="col-5 mx-auto">
                        <div className="input-group">
                            <input type="search" onChange={(e) => setSearchTerm(e.target.value)} placeholder="search faculty id" id="form1" className="form-control" />
                            <button type="button" className="btn btn-primary">
                                <i className="bi bi-search"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <table className="table table-bordered  border-dark " style={{ border: "2px solid black" }}>
                    <thead>
                        <tr>
                            <th scope="col">S.No.</th>
                            <th scope="col">Pic</th>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email Id</th>
                            <th scope="col">Status</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {facultyData && facultyData.map((student, index) => {
                            if (searchTerm === '' || student.userId.includes(searchTerm))
                                return (
                                    <tr className="text-center">
                                        <td scope="row">{index + 1}</td>
                                        <td>
                                            {student.pic !== 'Nil' ? (
                                                <img src={baseUrl + student.pic} className="rounded-circle" height="80vh" alt="profile pic" />
                                            ) : (
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
                                            {student.status === 'active' ?
                                                (<button className="btn btn-warning" onClick={(e) => updateAcc(student._id, 'inactive')}>disable</button>)
                                                : (<button className="btn btn-success" onClick={(e) => updateAcc(student._id, 'active')}>enable</button>)
                                            }
                                            <button className="btn btn-danger ms-1" onClick={(e) => deleteAcc(student._id)}>delete</button>

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
export default AdminFacultyAccounts;