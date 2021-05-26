import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../features/count/countSlice";

export default configureStore({
    reducer: {
        count: countReducer,
    },
});