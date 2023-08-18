import {configureStore} from "@reduxjs/toolkit";
import { customReducer } from "./Reducer";

const store = configureStore({
    custom:customReducer
});

export default store;