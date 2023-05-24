import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
    name: 'student',
    initialState: { notes: [], notifications: [], profile: {}, courses: [], sections: [], marks: {}, attendance: {} },
    reducers: {
        setNotes(state, action) {
            state.notes = action.payload;
        },
        setNotifications(state, action) {
            state.notifications = action.payload;
        },
        setProfile(state, action) {
            state.profile = action.payload;
        },
        setCourses(state, action) {
            state.courses = action.payload;
        },
        setSections(state, action) {
            state.sections = action.payload;
        },
        setMarks(state, action) {
            state.marks = action.payload;
        },
        setAttendance(state, action) {
            state.attendance = action.payload;
        },
    }
});

export const studentActions = studentSlice.actions;

export default studentSlice;