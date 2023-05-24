import proxyAxios from "../../axiosMiddleware";
import { facultyActions } from "../facultySlice";

export const sendNewNotes = (newNote) => {
    return async (dispatch) => {
        const reqHandler = async () => {
            let formData = new FormData();
            formData.append("notesFile", newNote.fileLink.data)
            const newNoteData = { ...newNote };
            newNoteData.fileLink = "Nil";
            formData.append('data', JSON.stringify(newNoteData));
            proxyAxios.post("/api/faculty/notes", formData)
                .then((res) => res.data)
                .then((data) => {
                    dispatch(getNotes());
                    alert('notes saved successfully')
                })
        }
        await reqHandler();
    }
}
export const getNotes = (deptId) => {
    return async (dispatch) => {
        const reqHandler = async () => {
            proxyAxios.get("/api/faculty/notes/" + deptId)
                .then((res) => res.data)
                .then((data) => {
                    dispatch(facultyActions.setNotes(data.notes));
                })
        }
        await reqHandler();
    }
}

export const deleteNotes = (id) => {
    return async (dispatch) => {
        const reqHandler = async () => {
            proxyAxios.delete("/api/faculty/notes/" + id)
                .then((res) => res.data)
                .then((data) => {
                    dispatch(getNotes());
                    alert('notes deleted successfully')
                })
        }
        await reqHandler();
    }
}
