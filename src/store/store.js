import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import facultySlice from "./facultySlice";
import studentSlice from "./studentSlice";

const store=configureStore({
    reducer:{
        auth:authSlice.reducer,
        faculty:facultySlice.reducer,
        student:studentSlice.reducer,
    },
});

export default store;