import {configureStore} from "@reduxjs/toolkit";
import { customReducer } from "./Reducer";

const store = configureStore({
    reducer: {
        custom: customReducer,
    },
});


export default store;