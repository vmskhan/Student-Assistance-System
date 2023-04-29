import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import facultySlice from "./facultySlice";

const store=configureStore({
    reducer:{
        auth:authSlice.reducer,
        faculty:facultySlice.reducer,
    },
});

export default store;