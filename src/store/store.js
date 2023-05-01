import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import facultySlice from "./facultySlice";
import studentSlice from "./studentSlice";
import adminSlice from "./adminSlice";

const store=configureStore({
    reducer:{
        auth:authSlice.reducer,
        faculty:facultySlice.reducer,
        student:studentSlice.reducer,
        admin:adminSlice.reducer,
    },
});

export default store;