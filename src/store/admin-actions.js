import { adminActions } from "./adminSlice";
import proxyAxios from "../axiosMiddleware";

export const getAdminNotifications=()=>{
    return async(dispatch)=>{
            const reqHandler=async()=>{
            proxyAxios.get("/api/admin/notifications")
            .then((res)=>res.data)
            .then((data)=>{
                dispatch(adminActions.setNotifications(data.notifications));
            })
        }
        await reqHandler();
    }
}

export const createNotification=(data)=>{
    return async(dispatch)=>{
            const reqHandler=async()=>{
                let formData=new FormData();
                if(data.documentLink.data!=='')
                formData.append("notificationDocument",data.documentLink.data);
                let newNotifData={...data};
                newNotifData.documentLink="Nil";
                formData.append("data",JSON.stringify(newNotifData));
            proxyAxios.post("/api/admin/notifications",formData)
            .then((res)=>res.data)
            .then((data)=>{
                dispatch(getAdminNotifications());
            })
        }
        await reqHandler();
    }
}

export const deleteAdminNotifications=(id)=>{
    return async(dispatch)=>{
            const reqHandler=async()=>{
            proxyAxios.delete("/api/admin/notifications/"+id)
            .then((res)=>res.data)
            .then((data)=>{
                dispatch(getAdminNotifications());
            })
        }
        await reqHandler();
    }
}