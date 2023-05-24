import { adminActions } from "../adminSlice";
import proxyAxios from "../../axiosMiddleware";

export const getFacultyAccounts = () => {
    return async (dispatch) => {
        const reqHandler = async () => {
            proxyAxios.get('/api/admin/getFacultyAccounts')
                .then((res) => res.data)
                .then((data) => {
                    //   console.log(data);
                    dispatch(adminActions.setFacultyAccounts(data.data));
                });
        }
        await reqHandler();
    }
}

export const updateFacultyAccount = (data) => {
    return async (dispatch) => {
        const reqHandler = async () => {
            proxyAxios.put('/api/admin/updateAccStatus', data)
                .then((res) => res.data)
                .then((data) => {
                    console.log(data);
                    //setFacultyData(data.data);
                    dispatch(getFacultyAccounts());
                    // alert('faculty profile updated successfully')
                });
        }
        await reqHandler();
    }
}

export const deleteFacultyAccount = (accId) => {
    return async (dispatch) => {
        const reqHandler = async () => {
            proxyAxios.delete('/api/admin/deleteAccount/' + accId)
                .then((res) => res.data)
                .then((data) => {
                    // console.log(data);
                    dispatch(getFacultyAccounts());
                    alert('faculty account deleted successfully')
                });
        }
        await reqHandler();
    }
}

export const getFacultyProfiles = () => {
    return async (dispatch) => {
        const reqHandler = async () => {
            proxyAxios.get('/api/admin/getFacultyProfiles')
                .then((res) => res.data)
                .then((data) => {
                    //   console.log(data);
                    dispatch(adminActions.setFacultyProfiles(data.data));
                });
        }
        await reqHandler();
    }
}