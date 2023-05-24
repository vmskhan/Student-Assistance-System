import { adminActions } from "../adminSlice"
import proxyAxios from "../../axiosMiddleware"

export const getAdminCourses = () => {
    return async (dispatch) => {
        const reqHandler = async () => {
            proxyAxios.get("/api/admin/courses")
                .then((res) => res.data)
                .then((data) => {
                    // console.log(data);
                    dispatch(adminActions.setCourses(data.Courses));
                })
        }
        await reqHandler();
    }
}

export const createCourse = (data) => {
    return async (dispatch) => {
        const reqHandler = async () => {

            proxyAxios.post("/api/admin/courses", data)
                .then((res) => res.data)
                .then((data) => {
                    dispatch(getAdminCourses());
                    alert('course created successfully')
                })
        }
        await reqHandler();
    }
}

export const deleteCourse = (id) => {
    return async (dispatch) => {
        const reqHandler = async () => {
            proxyAxios.delete("/api/admin/courses/" + id)
                .then((res) => res.data)
                .then((data) => {
                    dispatch(getAdminCourses());
                    alert('course deleted successfully')
                })
        }
        await reqHandler();
    }
}

export const updateCourse = (data) => {
    return async (dispatch) => {
        const reqHandler = async () => {

            proxyAxios.put("/api/admin/courses", data)
                .then((res) => res.data)
                .then((data) => {
                    // console.log(data);
                    dispatch(getAdminCourses());
                    alert('course details updated successfully')
                })
        }
        await reqHandler();
    }
}
