import { createSlice } from "@reduxjs/toolkit";

const studentSlice=createSlice({
    name:'student',
    initialState:{notes:[],notifications:[],profile:{},courses:[],sections:[]},
    reducers:{
        setNotes(state,action){
            state.notes=action.payload;
        },
        setNotifications(state,action){
            state.notifications=action.payload;
        },
        setProfile(state,action){
            state.profile=action.payload;
        },
        setCourses(state,action){
            state.courses=action.payload;
        },
        setSections(state,action){
            state.sections=action.payload;
        },
    }
});

export const studentActions=studentSlice.actions;

export default studentSlice;