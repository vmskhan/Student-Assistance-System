import { adminActions } from "../adminSlice"
import proxyAxios from "../../axiosMiddleware"

export const getAdminSections=()=>{
    return async(dispatch)=>{
            const reqHandler=async()=>{
            proxyAxios.get("/api/admin/sections")
            .then((res)=>res.data)
            .then((data)=>{
                // console.log(data);
                dispatch(adminActions.setSections(data.Sections));
            })
        }
        await reqHandler();
    }
}

export const createSection=(data)=>{
    return async(dispatch)=>{
            const reqHandler=async()=>{
                
            proxyAxios.post("/api/admin/sections",data)
            .then((res)=>res.data)
            .then((data)=>{
                dispatch(getAdminSections());
            })
        }
        await reqHandler();
    }
}

export const deleteSection=(id)=>{
    return async(dispatch)=>{
            const reqHandler=async()=>{
            proxyAxios.delete("/api/admin/sections/"+id)
            .then((res)=>res.data)
            .then((data)=>{
                dispatch(getAdminSections());
            })
        }
        await reqHandler();
    }
}

export const updateSection=(data)=>{
    return async(dispatch)=>{
            const reqHandler=async()=>{
                
            proxyAxios.put("/api/admin/sections",data)
            .then((res)=>res.data)
            .then((data)=>{
                // console.log(data);
                dispatch(getAdminSections());
            })
        }
        await reqHandler();
    }
}
