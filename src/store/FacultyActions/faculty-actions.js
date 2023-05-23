import proxyAxios from "../../axiosMiddleware";
import { facultyActions } from "../facultySlice";


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

export const getFacultyProfile=(id)=>{
    return async(dispatch)=>{
            const reqHandler=async()=>{
            proxyAxios.get("/api/faculty/profile/"+id)
            .then((res)=>res.data)
            .then((data)=>{
                console.log(data)
                dispatch(facultyActions.setProfile(data.facultyProfile));
            })
        }
        await reqHandler();
    }
}

export const updateFacultyProfile=(facultyData)=>{
    return async(dispatch)=>{
        const reqHandler=async()=>{
            // let formData=new FormData();
            // formData.append("notesFile",newNote.fileLink.data)
            // const newNoteData={...newNote};
            // newNoteData.fileLink="Nil";
            // formData.append('data',JSON.stringify(newNoteData));
            proxyAxios.put("/api/faculty/profile",facultyData)
            .then((res)=>res.data)
            .then((data)=>{
                console.log(data);
                dispatch(getFacultyProfile(facultyData.facultyId));
            })
        }
        await reqHandler();
    }
}

export const getDepartmentsForFaculty=()=>{
    return async(dispatch)=>{
            const reqHandler=async()=>{
            proxyAxios.get("/api/faculty/departments")
            .then((res)=>res.data)
            .then((data)=>{
                console.log(data)
                dispatch(facultyActions.setDepartments(data.Departments));
            })
        }
        await reqHandler();
    }
}

export const getTimeTableForParticularFaculty=(id)=>{
    return async(dispatch)=>{
            const reqHandler=async()=>{
            proxyAxios.get("/api/faculty/timeTable/"+id)
            .then((res)=>res.data)
            .then((data)=>{
                console.log(data)
                dispatch(facultyActions.setTimeTable(data.TimeTable));
            })
        }
        await reqHandler();
    }
}

export const getSectionsForFaculty=()=>{
    return async(dispatch)=>{
            const reqHandler=async()=>{
            proxyAxios.get("/api/faculty/sections")
            .then((res)=>res.data)
            .then((data)=>{
                console.log(data)
                dispatch(facultyActions.setSections(data.Sections));

            })
        }
        await reqHandler();
    }
}

export const getCoursesForFaculty=(deptId)=>{
    return async(dispatch)=>{
            const reqHandler=async()=>{
            proxyAxios.get("/api/faculty/courses/"+deptId)
            .then((res)=>res.data)
            .then((data)=>{
                console.log(data)
                dispatch(facultyActions.setCourses(data.Courses));
            })
        }
        await reqHandler();
    }
}

export const getSubjectsForFaculty=(deptId)=>{
    return async(dispatch)=>{
            const reqHandler=async()=>{
            proxyAxios.get("/api/faculty/subjects/"+deptId)
            .then((res)=>res.data)
            .then((data)=>{
                console.log(data)
                dispatch(facultyActions.setSubjects(data.Subjects));
            })
        }
        await reqHandler();
    }
}

export const getStudentProfilesForFaculty=(sectionId)=>{
    return async(dispatch)=>{
            const reqHandler=async()=>{
                // console.log(sectionId)
            proxyAxios.get("/api/faculty/studentProfiles/"+sectionId)
            .then((res)=>res.data)
            .then((data)=>{
                console.log(data)
                dispatch(facultyActions.setStudentProfiles(data.studentProfiles));
            }).catch((err)=>{
                console.log(err)
            })
        }
        await reqHandler();
    }
}

export const getStudentAccountsForFaculty=(sectionId)=>{
    return async(dispatch)=>{
            const reqHandler=async()=>{
            proxyAxios.get("/api/faculty/studentAccounts/"+sectionId)
            .then((res)=>res.data)
            .then((data)=>{
                console.log(data)
                dispatch(facultyActions.setStudentAccounts(data.studentAccounts));
            })
        }
        await reqHandler();
    }
}


export const getSelectedSection=(sectionId)=>{
    return async(dispatch)=>{
            const reqHandler=async()=>{
            proxyAxios.get("/api/faculty/sections/"+sectionId)
            .then((res)=>res.data)
            .then((data)=>{
                console.log(data)
                dispatch(facultyActions.setSelectedSection(data.Section));

            })
        }
        await reqHandler();
    }
}

export const updateParticularStudentMarks=(marksData)=>{
    return async(dispatch)=>{
            const reqHandler=async()=>{
            proxyAxios.post("/api/faculty/sections/marks",marksData)
            .then((res)=>res.data)
            .then((data)=>{
                console.log(data)
                dispatch(getSelectedSection(marksData.sectionId));
            })
        }
        await reqHandler();
    }
}
