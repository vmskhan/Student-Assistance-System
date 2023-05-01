import proxyAxios from "./../axiosMiddleware";
import { facultyActions } from "./facultySlice";

export const sendNewNotes=(newNote)=>{
    return async(dispatch)=>{
        const reqHandler=async()=>{
            let formData=new FormData();
            formData.append("notesFile",newNote.fileLink.data)
            const newNoteData={...newNote};
            newNoteData.fileLink="Nil";
            formData.append('data',JSON.stringify(newNoteData));
            proxyAxios.post("/api/faculty/notes",formData)
            .then((res)=>res.data)
            .then((data)=>{
                dispatch(getNotes());
            })
        }
        await reqHandler();
    }
}
export const getNotes=()=>{
    return async(dispatch)=>{
            const reqHandler=async()=>{
            proxyAxios.get("/api/faculty/notes")
            .then((res)=>res.data)
            .then((data)=>{
                dispatch(facultyActions.setNotes(data.notes));
            })
        }
        await reqHandler();
    }
}

export const deleteNotes=(id)=>{
    return async(dispatch)=>{
            const reqHandler=async()=>{
            proxyAxios.delete("/api/faculty/notes/"+id)
            .then((res)=>res.data)
            .then((data)=>{
                dispatch(getNotes());
            })
        }
        await reqHandler();
    }
}

export const getNotificationsForFaculty=()=>{
    return async(dispatch)=>{
            const reqHandler=async()=>{
            proxyAxios.get("/api/faculty/notifications")
            .then((res)=>res.data)
            .then((data)=>{
                // console.log(data)
                dispatch(facultyActions.setNotifications(data.notifications));
            })
        }
        await reqHandler();
    }
}