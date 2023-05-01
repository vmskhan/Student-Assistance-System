import { createSlice } from "@reduxjs/toolkit";

const adminSlice=createSlice({
    name:"admin",
    initialState:{notifications:[]},
    reducers:{
        setNotifications(state,action){
            state.notifications=action.payload;
        }
    }
});

export const adminActions=adminSlice.actions;

export default adminSlice;