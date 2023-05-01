import { useDispatch, useSelector } from "react-redux";
import { getNotificationsForFaculty } from "../../store/faculty-actions";
import { useEffect } from "react";

const FacultyNotifications=()=>{
    const baseUrl=process.env.REACT_APP_IMAGE_UPLOADS_BASE_URL;
  const notifications=useSelector(state=>state.faculty.notifications);
  const dispatch=useDispatch();
  
  useEffect(()=>{
    dispatch(getNotificationsForFaculty());
  },[])  
//   useEffect(()=>{
// console.log(notifications);
//   },[notifications])

  return(
        <div>
             <section className="d-flex justify-content-center align-items-center bg-secondary">
                <div className="">
                <div className="h1 fw-bolder fs-1 text-center my-5">Notifications</div>
                </div>
              </section>
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
                                      </div>
                                  </div>
                              </div>
                      
                                  );
                              })}
                          </div>
                    </div>
                </div>
              </section>
        </div>
    )
}

export default FacultyNotifications;