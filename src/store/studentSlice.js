import { createSlice } from "@reduxjs/toolkit";

const studentSlice=createSlice({
    name:'student',
    initialState:{notes:[]},
    reducers:{
        setNotes(state,action){
            state.notes=action.payload;
        }
    }
});

export const studentActions=studentSlice.actions;

export default studentSlice;