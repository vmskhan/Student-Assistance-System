import { createSlice } from "@reduxjs/toolkit";

const adminSlice=createSlice({
    name:"admin",
    initialState:{
        notifications:[],
        facultyAccounts:[],
        facultyProfiles:[],
        departments:[],
        courses:[],
        subjects:[],
        sections:[],
        timeTable:{},
        studentAccounts:[],
    },
    reducers:{
        setNotifications(state,action){
            state.notifications=action.payload;
        },
        setFacultyAccounts(state,action){
            state.facultyAccounts=action.payload;
        },
        setFacultyProfiles(state,action){
            state.facultyProfiles=action.payload;
        },
        setDepartments(state,action){
            state.departments=action.payload;
        },
        setCourses(state,action){
            state.courses=action.payload;
        },
        setSubjects(state,action){
            state.subjects=action.payload;
        },
        setSections(state,action){
            state.sections=action.payload;
        },
        setTimeTable(state,action){
            state.timeTable=action.payload;
        },
        setStudentAccounts(state,action){
            state.studentAccounts=action.payload;
        },
    }
});

export const adminActions=adminSlice.actions;

export default adminSlice;