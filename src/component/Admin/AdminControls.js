import proxyAxios from "../../axiosMiddleware";
import { useEffect, useState } from "react";

const AdminControls=()=>{
    const [studProfStatus,setStudProfStatus]=useState(false);
    const [faclProfStatus,setFaclProfStatus]=useState(false);
    const [adminData,setAdminData]=useState({'rules':[{}]});
    const [rule,setRule]=useState({});
    const [currIndex,setCurrIndex]=useState(-1);
    useEffect(()=>{
       getAdminControls(); 
    },[])
const getAdminControls=async()=>{
    proxyAxios.get('/api/admin/getAdminControls')
    .then((res)=>res.data)
    .then((data)=>{
        console.log(data);
        if(data.data.length===0)
            createDefaultAdminControls();
        else{
            setAdminData(data.data[0]);
            setStudProfStatus(data.data[0].studProfStatus);
            setFaclProfStatus(data.data[0].faclProfStatus);
        }
        
    });
}

    const createDefaultAdminControls=()=>{
        console.log('reeaching here')
        proxyAxios.post('/api/admin/createAdminControls')
        .then((res)=>res.data)
        .then((data)=>{
            console.log(data);
            // setAdminData(data.data);
            getAdminControls();
        });
    }
    const updateAdminControls=()=>{
        console.log('reeaching here')
        
        proxyAxios.put('/api/admin/updateAdminControls',adminData)
        .then((res)=>res.data)
        .then((data)=>{
            console.log(data);
            // setAdminData(data.data);
            getAdminControls();
        });
    }

    const updateRule=()=>{
        let newControls=Object.assign({},adminData);
        newControls.rules[currIndex]=rule;
        setAdminData(newControls);
    }
    const addNewRule=()=>{
        let newControls=Object.assign({},adminData);
        newControls.rules=[...newControls.rules,rule];
        setAdminData(newControls);
    }
    const initializeRule=(index)=>{
        let newControls=Object.assign({},adminData);
        setRule(newControls.rules[index]);
        setCurrIndex(index);
    }
    const deleteRule=(index)=>{
        let newControls=Object.assign({},adminData);
        newControls.rules=newControls.rules.slice(0,index).concat(newControls.rules.slice(index+1));
        setAdminData(newControls);
    }
    return(
    <div>
        <div className="modal" id="addRuleModal" tabindex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Add Rule On {rule.role} Profiles</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <p>Type Comma seprated range of rollno's. Ex-: 0-20,301-306 in the range. 
                    For allowing access from any dept,year,roll/uid put value as <span className="fw-bolder text-primary">'any'</span>.</p>
                    <form>
                    <label className="form-label">Department</label>
                <input type="text" className="form-control" placeholder="Department" onChange={(e)=>{
                    let newRule=Object.assign({},rule);
                    newRule.dept=e.target.value;
                    setRule(newRule);
                    }} value={rule.dept}/>
                    {rule.role==='student' && 
                    <>
                    <label className="form-label">Year</label>
                    <input type="text" className="form-control" placeholder="year"  onChange={(e)=>{
                    let newRule=Object.assign({},rule);
                    newRule.year=e.target.value;
                    setRule(newRule);
                    }} value={rule.year}/>
                    </>
                    }
                    
                    <label className="form-label">Range</label>
                    <input type="text" className="form-control" placeholder="Range"  onChange={(e)=>{
                    let newRule=Object.assign({},rule);
                    newRule.range=e.target.value;
                    setRule(newRule);
                    }} value={rule.range}/>
                    <label className="form-label">Action</label>
                    <select className="form-select"  onChange={(e)=>{
                    let newRule=Object.assign({},rule);
                    newRule.action=e.target.value;
                    setRule(newRule);
                    }} value={rule.action}>
                        <option >select action</option>
                        <option value="allow">allow</option>
                        <option value="disallow">disallow</option>
                    </select>
                    </form>
                    {/* <input type="text" className="form-control" placeholder="Department" value={rule.dept}/>} */}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onClick={addNewRule}>Add</button>
                </div>
                </div>
            </div>
        </div>


        <div className="modal" id="updateRuleModal" tabindex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Update Rule On {rule.role} Profiles</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <p>Type Comma seprated range of rollno's. Ex-: 0-20,301-306 in the range. 
                    For allowing access from any dept,year,roll/uid put value as <span className="fw-bolder text-primary">'any'</span>.</p>
                    <form>
                    <label className="form-label">Department</label>
                <input type="text" className="form-control" placeholder="Department" onChange={(e)=>{
                    let newRule=Object.assign({},rule);
                    newRule.dept=e.target.value;
                    setRule(newRule);
                    }} value={rule.dept}/>
                    {rule.role==='student' && 
                    <>
                    <label className="form-label">Year</label>
                    <input type="text" className="form-control" placeholder="year"  onChange={(e)=>{
                    let newRule=Object.assign({},rule);
                    newRule.year=e.target.value;
                    setRule(newRule);
                    }} value={rule.year}/>
                    </>
                    }
                    
                    <label className="form-label">Range</label>
                    <input type="text" className="form-control" placeholder="Range"  onChange={(e)=>{
                    let newRule=Object.assign({},rule);
                    newRule.range=e.target.value;
                    setRule(newRule);
                    }} value={rule.range}/>
                    <label className="form-label">Action</label>
                    <select className="form-select"  onChange={(e)=>{
                    let newRule=Object.assign({},rule);
                    newRule.action=e.target.value;
                    setRule(newRule);
                    }} value={rule.action}>
                        <option >select action</option>
                        <option value="allow">allow</option>
                        <option value="disallow">disallow</option>
                    </select>
                    </form>
                    {/* <input type="text" className="form-control" placeholder="Department" value={rule.dept}/>} */}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onClick={updateRule}>Update</button>
                </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="card m-5">
                <div className="card-body">
                    <h2 className="card-title">Admin Controls</h2>
                    <p className="card-text">These are special admin controls to restrict, enable and disable student and faculty profiles</p>
                    <div className="form-check form-switch my-2">
                        <input className="form-check-input" type="checkbox" onClick={(e)=>setStudProfStatus(!studProfStatus)}  role="switch" id="flexSwitchCheckDefault" checked={studProfStatus} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Student Profiles are {studProfStatus?'active':'inactive'}. Click to {studProfStatus?'deactivate':'activate'}</label>
                    </div>
                    <div className="form-check form-switch my-2">
                        <input className="form-check-input" type="checkbox" onClick={(e)=>setFaclProfStatus(!faclProfStatus)} role="switch" id="flexSwitchCheckDefault" checked={faclProfStatus}/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Faculty Profiles are {faclProfStatus?'active':'inactive'}. Click to {faclProfStatus?'deactivate':'activate'}</label>
                    </div>
                    <div>
                        <h4 className="my-4">Add Restrictions</h4>
                        <div className="row mb-3">
                            <p className="col">Rules for student profiles:</p>
                            <button className="btn btn-success col-2 mx-3" data-bs-toggle="modal" data-bs-target="#addRuleModal" onClick={()=>{
                                let tempRule=Object.assign({},rule)
                                tempRule.role='student'
                                setRule(tempRule);
                            }}>Add Rule +</button>
                        </div>
                        <table className="table">
                <thead>
                    <tr>
                    <th scope="col">S.No.</th>
                    <th scope="col">Dept</th>
                    <th scope="col">Year</th>
                    <th scope="col">Range</th>
                    <th scope="col">Rule</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {adminData && adminData.rules.map((rule,index)=>{
                        if(rule.role==='student')
                        return(
                    <tr>
                        <th scope="row">{index+1}</th>
                        <td>{rule.dept}</td>
                        <td>{rule.year}</td>
                        <td>{rule.range}</td>
                        <td>{rule.action}</td>
                        <td>
                        <button className="btn btn-Info" data-bs-target="#updateRuleModal" data-bs-toggle="modal" onClick={(e)=>initializeRule(index)}>Edit</button>
                            
                            <button className="btn btn-danger ms-1" onClick={(e)=>deleteRule(index)} >delete</button> 
                            {/* onClick={(e)=>deleteStudentProfile(student._id)} */}
                            
                        </td>
                    </tr>
                    );
                })
                }
                </tbody>
                </table>
                <div className="row my-3">
                            <p className="col">Rules for Faculty profiles:</p>
                            <button className="btn btn-success col-2 mx-3" data-bs-toggle="modal" data-bs-target="#addRuleModal" onClick={()=>{
                                let tempRule=Object.assign({},rule)
                                tempRule.role='faculty'
                                setRule(tempRule);
                            }}>Add Rule +</button>
                </div>
                
                        <table className="table">
                <thead>
                    <tr>
                    <th scope="col">S.No.</th>
                    <th scope="col">Dept</th>
                    <th scope="col">Range</th>
                    <th scope="col">Rule</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {adminData && adminData.rules.map((rule,index)=>{
                        if(rule.role==='faculty')
                        return(
                    <tr>
                        <th scope="row">{index+1}</th>
                        <td>{rule.dept}</td>
                        <td>{rule.range}</td>
                        <td>{rule.action}</td>
                        <td>
                            <button className="btn btn-Info" data-bs-target="#updateRuleModal" data-bs-toggle="modal" onClick={(e)=>initializeRule(index)}>Edit</button>
                            <button className="btn btn-danger ms-1" >delete</button> 
                            {/* onClick={(e)=>deleteStudentProfile(student._id)} */}
                            
                        </td>
                    </tr>
                    );
                })
                }
                </tbody>
                </table>
                    <div className="row justify-content-end">
                        <div className="col-2 "><button className="btn btn-success" onClick={updateAdminControls}>Save changes</button></div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <section className=""><br/><br/><br/><br/><br/><br/><br/><br/> </section>
    </div>
    );
}
export default AdminControls;