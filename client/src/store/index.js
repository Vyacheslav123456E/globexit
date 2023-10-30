import {configureStore} from "@reduxjs/toolkit";
import users from "./report";

export const store = configureStore({
    reducer: {
        users: users
    },
    devTools: true,
});