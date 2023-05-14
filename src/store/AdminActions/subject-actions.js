import { adminActions } from "../adminSlice"
import proxyAxios from "../../axiosMiddleware"

export const getAdminSubjects=()=>{
    return async(dispatch)=>{
            const reqHandler=async()=>{
            proxyAxios.get("/api/admin/subjects")
            .then((res)=>res.data)
            .then((data)=>{
                // console.log(data);
                dispatch(adminActions.setSubjects(data.Subjects));
            })
        }
        await reqHandler();
    }
}

export const createSubject=(data)=>{
    return async(dispatch)=>{
            const reqHandler=async()=>{
                
            proxyAxios.post("/api/admin/subjects",data)
            .then((res)=>res.data)
            .then((data)=>{
                dispatch(getAdminSubjects());
            })
        }
        await reqHandler();
    }
}

export const deleteSubject=(id)=>{
    return async(dispatch)=>{
            const reqHandler=async()=>{
            proxyAxios.delete("/api/admin/subjects/"+id)
            .then((res)=>res.data)
            .then((data)=>{
                dispatch(getAdminSubjects());
            })
        }
        await reqHandler();
    }
}

export const updateSubject=(data)=>{
    return async(dispatch)=>{
            const reqHandler=async()=>{
                
            proxyAxios.put("/api/admin/subjects",data)
            .then((res)=>res.data)
            .then((data)=>{
                // console.log(data);
                dispatch(getAdminSubjects());
            })
        }
        await reqHandler();
    }
}
