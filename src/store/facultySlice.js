import { createSlice } from "@reduxjs/toolkit";

const facultySlice=createSlice({
    name:'faculty',
    initialState:{notes:[],notifications:[]},
    reducers:{
        setNotes(state,action)
        {
            state.notes=action.payload;
        },
        setNotifications(state,action)
        {
            state.notifications=action.payload;
        },
    }
});
export const facultyActions=facultySlice.actions;

export default facultySlice;