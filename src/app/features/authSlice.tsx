/* eslint-disable prettier/prettier */
import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BASE_URL} from '../../constants';

interface AuthState {
  [x: string]: any;
  user: any;
  isLoading: boolean;
  error: string | null;
}

interface LoginCredentials {
  email: string;
  password: string;
}

// Create an async thunk to handle the login API request
export const login = createAsyncThunk(
  'auth/login',
  async (credentials: LoginCredentials) => {
    const response = await fetch(`${BASE_URL}/user/login`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    const data = await response.json();
    return data;
  },
);

// Define the initial state for the slice
const initialState: AuthState = {
  user: {},
  userToken: null,
  isLoading: false,
  error: null,
  success: false,
};

// Create the auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.user = null;
      AsyncStorage.removeItem('user');
    },
    setLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      // Handle login request start
      .addCase(login.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      // Handle login request success
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.error = null;
        AsyncStorage.setItem('user', JSON.stringify(action.payload));
      })
      // Handle login request failure
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

// Use AsyncStorage to retrieve the user data and update the initial state
AsyncStorage.getItem('user').then(data => {
  if (data) {
    initialState.user = JSON.parse(data);
  }
});

export const {logout, setLogin} = authSlice.actions;

export default authSlice.reducer;
