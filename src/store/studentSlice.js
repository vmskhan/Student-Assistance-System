import { createSlice } from "@reduxjs/toolkit";

const studentSlice=createSlice({
    name:'student',
    initialState:{notes:[],notifications:[]},
    reducers:{
        setNotes(state,action){
            state.notes=action.payload;
        },
        setNotifications(state,action){
            state.notifications=action.payload;
        },
    }
});

export const studentActions=studentSlice.actions;

export default studentSlice;