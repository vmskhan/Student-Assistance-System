import { createSlice } from "@reduxjs/toolkit";

const facultySlice=createSlice({
    name:'faculty',
    initialState:{
        notes:[],
        notifications:[],
        profile:{},
        departments:[],
        timeTable:{},
        sections:[],
        courses:[],
        subjects:[],
        studentProfiles:[],
        studentAccounts:[],
    },
    reducers:{
        setNotes(state,action)
        {
            state.notes=action.payload;
        },
        setNotifications(state,action)
        {
            state.notifications=action.payload;
        },
        setProfile(state,action){
            state.profile=action.payload;
        },
        setDepartments(state,action){
            state.departments=action.payload;
        },
        setTimeTable(state,action){
            state.timeTable=action.payload;
        },
        setSections(state,action){
            state.sections=action.payload;
        },
        setCourses(state,action){
            state.courses=action.payload;
        },
        setSubjects(state,action){
            state.subjects=action.payload;
        },
        setStudentProfiles(state,action){
            state.studentProfiles=action.payload;
        },
        setStudentAccounts(state,action){
            state.studentAccounts=action.payload;
        }
    }
});
export const facultyActions=facultySlice.actions;

export default facultySlice;