import { adminActions } from "../adminSlice"
import proxyAxios from "../../axiosMiddleware"

// export const getAdminTimeTables=()=>{
//     return async(dispatch)=>{
//             const reqHandler=async()=>{
//             proxyAxios.get("/api/admin/timeTables")
//             .then((res)=>res.data)
//             .then((data)=>{
//                 // console.log(data);
//                 dispatch(adminActions.setTimeTables(data.TimeTables));
//             })
//         }
//         await reqHandler();
//     }
// }

export const getAdminTimeTableWithSection = (id) => {
    return async (dispatch) => {
        const reqHandler = async () => {
            proxyAxios.get("/api/admin/timeTables/" + id)
                .then((res) => res.data)
                .then((data) => {
                    console.log(data);
                    dispatch(adminActions.setTimeTable(data.TimeTable));
                })
        }
        await reqHandler();
    }
}

export const createTimeTable = (timeTableData) => {
    return async (dispatch) => {
        const reqHandler = async () => {

            proxyAxios.post("/api/admin/timeTables", timeTableData)
                .then((res) => res.data)
                .then((data) => {
                    dispatch(getAdminTimeTableWithSection(timeTableData.sectionId));
                    alert('time table created successfully')
                })
        }
        await reqHandler();
    }
}

export const deleteTimeTable = (id, secId) => {
    return async (dispatch) => {
        const reqHandler = async () => {
            proxyAxios.delete("/api/admin/timeTables/" + id)
                .then((res) => res.data)
                .then((data) => {
                    dispatch(getAdminTimeTableWithSection(secId));
                    alert('time table deleted successfully')
                })
        }
        await reqHandler();
    }
}

export const updateTimeTable = (timeTableData) => {
    return async (dispatch) => {
        const reqHandler = async () => {

            proxyAxios.put("/api/admin/timeTables", timeTableData)
                .then((res) => res.data)
                .then((data) => {
                    console.log(data);
                    dispatch(getAdminTimeTableWithSection(timeTableData.sectionId));
                    alert('time table updated successfully')
                })
        }
        await reqHandler();
    }
}
