import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNotification, deleteAdminNotifications, getAdminNotifications } from "../../store/admin-actions";


const AdminNotifications=()=>{
    const baseUrl=process.env.REACT_APP_IMAGE_UPLOADS_BASE_URL;
    const notifications=useSelector(state=>state.admin.notifications);
    const dispatch=useDispatch();

    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const [document,setDocument]=useState({data:''});
    const [externalLink,setExternalLink]=useState("Nil");
    const [issuedFor,setIssuedFor]=useState("");
    const userInfo=JSON.parse(localStorage.getItem("userInfo"));
    
    useEffect(()=>{
        dispatch(getAdminNotifications());
    },[])

    useEffect(()=>{
        console.log(notifications)
    },[notifications]);

    const addNotification=()=>{
        let data={
            title,
            description,
            documentLink:document,
            externalLink,
            issuedFor,
            issuedBy:userInfo.name,
        }
        dispatch(createNotification(data));
    }
    const deleteNotificationHandler=(id)=>{
        dispatch(deleteAdminNotifications(id));
    }
    return(
        <div>
            <section className="d-flex justify-content-center align-items-center bg-secondary">
                <div className="">
                    <div className="h1 fw-bolder fs-1 text-center my-5">Notifications</div>
                </div>
          </section>
          <div className="text-end m-5">
                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newNotificationModal">
                    <i class="bi bi-clipboard2-plus"></i> Create Notification
                </button>
            </div>
          <section>
            <div className="card m-5 p-5">
                <div className="card-header text-center bg-success">
                    <div className="card-title fs-5 fw-bold">
                        Notices
                    </div>
                </div>
                <div className="card-body">
                    <div class="accordion" id="accordionNotifications">
                    {notifications.map((notification,index)=>{
                    return(
                            <div class="accordion-item mb-3">
                                <h2 class="accordion-header">
                                <button class="accordion-button fs-5 fw-bold fst-italic" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse"+index} aria-expanded="true" aria-controls={"collapse"+index}>
                                    {notification.title}
                                    <br/>
                                    ~{notification.issuedDate}
                                </button>  
                                
                                </h2>
                                <div id={"collapse"+index} class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        {notification.description}
                                        <br/>
                                        {notification.documentLink!=='Nil' &&
                                            <a className="btn btn-primary m-2" href={baseUrl+notification.documentLink}>Document</a>
                                        }
                                        
                                        {notification.externalLink!=='Nil' &&
                                            <a className="btn btn-primary m-2" href={notification.externalLink}>Link</a>
                                        }
                                        <div className="text-end">
                                            <button className="btn btn-danger" onClick={()=>deleteNotificationHandler(notification._id)}><i class="bi bi-trash3-fill"></i> Delete</button>
                                        </div>      
                                    </div>
                                </div>
                            </div>
                    
                                );
                            })}
                        </div>
                </div>
            </div>
          </section>

        {/* <!-- Modal --> */}
<div className="modal fade" id="newNotificationModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Add New Notification</h1>
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
            <label className=' input-group-text'>External Link</label>
            <input type='text' className="form-control" name='externalLink' placeholder="Paste Link" value={externalLink} onChange={(e)=>setExternalLink(e.target.value)} />
        </div>

        <div className='input-group mb-3'>
            <label className=' input-group-text'>Issued For</label>
            <select type='text' className="form-select" name='issuedFor' placeholder="select audience" value={issuedFor} onChange={(e)=>setIssuedFor(e.target.value)} >
            <option selected>Select audience</option>
             <option value={"Students"}>Students</option>   
             <option value={"Faculty"}>Faculty</option>   
             <option value={"All"}>All</option> 
            </select>
        </div>
        <div className='mb-3'>
            <label className='form-label'>Document</label>
            <input type='file' className="form-control" name='notesFile' onChange={(e)=>setDocument({data:e.target.files[0]})} />
        </div>
        
        </div>
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" onClick={addNotification}>Add</button>
        </div>
        </div>
    </div>
    </div>


        </div>
    );
}

export default AdminNotifications;