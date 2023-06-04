import { configureStore } from "@reduxjs/toolkit";
import updateUser from "./slice/updateUser.slice";

export default configureStore({
    reducer: {
        updateUser
    }
})