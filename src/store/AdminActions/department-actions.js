import { adminActions } from "../adminSlice"
import proxyAxios from "../../axiosMiddleware"

export const getAdminDepartments=()=>{
    return async(dispatch)=>{
            const reqHandler=async()=>{
            proxyAxios.get("/api/admin/departments")
            .then((res)=>res.data)
            .then((data)=>{
                // console.log(data);
                dispatch(adminActions.setDepartments(data.Departments));
            })
        }
        await reqHandler();
    }
}

export const createDepartment=(data)=>{
    return async(dispatch)=>{
            const reqHandler=async()=>{
                
            proxyAxios.post("/api/admin/departments",data)
            .then((res)=>res.data)
            .then((data)=>{
                dispatch(getAdminDepartments());
            })
        }
        await reqHandler();
    }
}

export const deleteDepartment=(id)=>{
    return async(dispatch)=>{
            const reqHandler=async()=>{
            proxyAxios.delete("/api/admin/departments/"+id)
            .then((res)=>res.data)
            .then((data)=>{
                dispatch(getAdminDepartments());
            })
        }
        await reqHandler();
    }
}

export const updateDepartment=(data)=>{
    return async(dispatch)=>{
            const reqHandler=async()=>{
                
            proxyAxios.put("/api/admin/departments",data)
            .then((res)=>res.data)
            .then((data)=>{
                // console.log(data);
                dispatch(getAdminDepartments());
            })
        }
        await reqHandler();
    }
}
