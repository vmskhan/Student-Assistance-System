import { createSlice } from "@reduxjs/toolkit";

const facultySlice=createSlice({
    name:'faculty',
    initialState:{notes:[]},
    reducers:{
        setNotes(state,action)
        {
            state.notes=action.payload;
        },
    }
});
export const facultyActions=facultySlice.actions;

export default facultySlice;