import { adminActions } from "../adminSlice";
import proxyAxios from "../../axiosMiddleware";

export const getStudentAccounts = () => {
    return async (dispatch) => {
        const reqHandler = async () => {
            proxyAxios.get('/api/admin/getStudentAccounts')
                .then((res) => res.data)
                .then((data) => {
                    console.log(data);
                    dispatch(adminActions.setStudentAccounts(data.data));
                });
        }
        await reqHandler();
    }
}

export const updateStudentAccount = (accId, newStatus) => {
    return async (dispatch) => {
        const reqHandler = async () => {
            proxyAxios.put('/api/admin/updateAccStatus', { 'accId': accId, 'status': newStatus })
                .then((res) => res.data)
                .then((data) => {
                    console.log(data);
                    dispatch(getStudentAccounts())

                });

        }
        await reqHandler();
    }
}


export const deleteStudentAccount = (accId) => {
    return async (dispatch) => {
        const reqHandler = async () => {
            proxyAxios.delete('/api/admin/deleteAccount/' + accId)
                .then((res) => res.data)
                .then((data) => {
                    console.log(data);
                    dispatch(getStudentAccounts());
                    alert('student account deleted successfully')
                });
        }
        await reqHandler();
    }
}


