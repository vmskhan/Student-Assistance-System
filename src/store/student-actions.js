import proxyAxios from "../axiosMiddleware"
import { studentActions } from "./studentSlice"

export const getNotesForStudent=()=>{
    return async(dispatch)=>{
            const reqHandler=async()=>{
            proxyAxios.get("/api/users/notes")
            .then((res)=>res.data)
            .then((data)=>{
                dispatch(studentActions.setNotes(data.notes));
            })
        }
        await reqHandler();
    }
}