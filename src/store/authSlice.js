import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:'auth',
    initialState:{isLoggedIn:false,userInfo:{}},
    reducers:{
        login(state){
            state.isLoggedIn=true;
        },
        logout(state){
            state.isLoggedIn=false;
        },
        setUserInfo(state,action){
            state.userInfo=action.payload;
        },
    },
});

export const authActions=authSlice.actions;

export default authSlice;