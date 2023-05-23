import proxyAxios from "../axiosMiddleware"
import { studentActions } from "./studentSlice"

export const getNotesForStudent=()=>{
    return async(dispatch)=>{
            const reqHandler=async()=>{
            proxyAxios.get("/api/users/notes")
            .then((res)=>res.data)
            .then((data)=>{
                console.log(data);
                dispatch(studentActions.setNotes(data.notes));
            })
        }
        await reqHandler();
    }
}

export const getNotificationsForStudent=()=>{
    return async(dispatch)=>{
            const reqHandler=async()=>{
            proxyAxios.get("/api/users/notifications")
            .then((res)=>res.data)
            .then((data)=>{
                dispatch(studentActions.setNotifications(data.notifications));
            })
        }
        await reqHandler();
    }
}

export const getProfileForStudent=(id)=>{
    return async(dispatch)=>{
            const reqHandler=async()=>{
            proxyAxios.get("/api/users/profile/"+id)
            .then((res)=>res.data)
            .then((data)=>{
                dispatch(studentActions.setProfile(data.studentProfile));
            })
        }
        await reqHandler();
    }
}

export const getCoursesForStudent=()=>{
    return async(dispatch)=>{
            const reqHandler=async()=>{
            proxyAxios.get("/api/users/courses")
            .then((res)=>res.data)
            .then((data)=>{
                dispatch(studentActions.setCourses(data.Courses));
            })
        }
        await reqHandler();
    }
}

export const getSectionsForStudent=()=>{
    return async(dispatch)=>{
            const reqHandler=async()=>{
            proxyAxios.get("/api/users/sections")
            .then((res)=>res.data)
            .then((data)=>{
                console.log(data);
                dispatch(studentActions.setSections(data.Sections));
            })
        }
        await reqHandler();
    }
}

export const updateStudentProfile=(userData)=>{
    return async(dispatch)=>{
            const reqHandler=async()=>{
            proxyAxios.put("/api/users/profile",userData)
            .then((res)=>res.data)
            .then((data)=>{
                console.log(data);
                dispatch(getProfileForStudent(userData.studentId));
            })
        }
        await reqHandler();
    }
}