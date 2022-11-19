import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: true,
    email: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = action.payload.isLoggedIn;
            state.email = action.payload.email;
        }
    }
});


export const { login } = authSlice.actions;

export const selectIsLoggedIn = (state: { auth: { isLoggedIn: any; }; }) => state.auth.isLoggedIn
export const selectEmail = (state: { auth: { email: any; }; }) => state.auth.email


export default authSlice.reducer;