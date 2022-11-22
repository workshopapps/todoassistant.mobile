import {configureStore} from "@reduxjs/toolkit"
import authSlice from "../features/authSlice"
import counterSlice from "../features/counterSlice"

export const store = configureStore({
    reducer: {
        auth: authSlice
    }
})