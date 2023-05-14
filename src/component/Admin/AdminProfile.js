import { useSelector } from "react-redux";

const AdminProfile=()=>{
    const baseUrl=process.env.REACT_APP_IMAGE_UPLOADS_BASE_URL;
    const userInfo=useSelector(state=>state.auth.userInfo);
    
    return(
        <>
        <div className="container-fluid">
            <div className="card m-5 p-5">
                <div className="card-body">
                    <div className="fs-2 fw-bolder text-center">
                        ADMIN PROFILE
                    </div>
                    <div className="fs-3">
                        Account Details
                    </div>
                    
                    <section className="row">
                        <div className="col-8 fs-5">
                        <label className="form-label">Name</label>
                        <input type="text" name="Name" className="form-control" value={userInfo.name} disabled />
                        <br/>
                        <label className="form-label">Email</label>
                        <input type="email" name="Email" className="form-control" value={userInfo.email} disabled />
                        <br/>
                        <label className="form-label">Role</label>
                        <input type="text" name="Role" className="form-control" value={userInfo.role} disabled />
                        <br/>
                        <label className="form-label">Status</label>
                        <input type="text" name="Status" className="form-control" value={userInfo.status} disabled />
                        <br/>
                        </div>
                        <div className="col-4">
                            {userInfo.pic!=='Nil'?(
                                <img src={baseUrl+userInfo.pic} className="img-fluid rounded-circle h-75" alt="Profile pic"/>
                            ):(
                                <img
                                src="/assets/images/logo1.png"
                                className="rounded-circle img-fluid"
                                alt="Black and White Portrait of a Man"
                                loading="lazy"
                              />
                            )}
                        </div>
                    </section>
                </div>
            </div>
            
        </div>
        </>
    );
}

export default AdminProfile;