import { useState } from "react";
import axios from "axios";

const StudentPerformance=()=>{
  const [pythonMessage,setPythonMessage]=useState("");
  const callPythonApi=()=>{
    axios.get("http://localhost:5000/test")
    .then((res)=>res.data)
    .then((data)=>{
      setPythonMessage(data);
    })
  }  
  return(
        <div>
             <section className="d-flex justify-content-center align-items-center bg-danger">
            <div className="">
            <div className="h1 fw-bolder fs-1 text-center my-5">Performance</div>
            </div>
            
          </section>
          <section>
            <div>Hello</div>
            <br/>
            <div>{pythonMessage}</div>
            <br/>
            <button onClick={callPythonApi}>Call python api</button>
          </section>
          <section className=""><br/><br/><br/><br/><br/><br/><br/><br/> </section>
        </div>
    )
}
export default StudentPerformance;